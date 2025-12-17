// Simple local-only blog app using localStorage
const LS_USERS='lb_users', LS_POSTS='lb_posts', LS_CURRENT='lb_current';

// Utilities
const $ = (s,root=document)=> root.querySelector(s);
const el = (tag,attrs={},...children)=>{const d=document.createElement(tag);for(const k in attrs) { if(k.startsWith('on')) d.addEventListener(k.slice(2),attrs[k]); else d.setAttribute(k,attrs[k]); } children.flat().forEach(c=>{if(typeof c==='string') d.appendChild(document.createTextNode(c)); else if(c) d.appendChild(c)}); return d}

function now(){return new Date().toISOString()}
function uid(prefix='id'){return prefix+'_'+Math.random().toString(36).slice(2,10)}

// Data access
function loadUsers(){try{return JSON.parse(localStorage.getItem(LS_USERS)||'[]')}catch(e){return []}}
function saveUsers(u){localStorage.setItem(LS_USERS,JSON.stringify(u))}
function loadPosts(){try{return JSON.parse(localStorage.getItem(LS_POSTS)||'[]')}catch(e){return []}}
function savePosts(p){localStorage.setItem(LS_POSTS,JSON.stringify(p))}
function getCurrent(){return JSON.parse(localStorage.getItem(LS_CURRENT)||'null')}
function setCurrent(u){localStorage.setItem(LS_CURRENT,JSON.stringify(u))}
function clearCurrent(){localStorage.removeItem(LS_CURRENT)}

// Simple password (not secure). In production use real hashing & backend.
function simpleHash(p){return btoa(unescape(encodeURIComponent(p))).slice(0,32)}

// Auth actions
function signup(username,password){const users=loadUsers(); if(!username) return {ok:false,msg:'Username required'}; if(users.find(x=>x.username===username)) return {ok:false,msg:'Username taken'}; const user={id:uid('u'),username,passwordHash:simpleHash(password||'') , joined:now()}; users.push(user); saveUsers(users); setCurrent({id:user.id,username:user.username}); render(); return {ok:true}}
function login(username,password){const users=loadUsers(); const h=simpleHash(password||''); const user=users.find(u=>u.username===username && u.passwordHash===h); if(!user) return {ok:false,msg:'Invalid credentials'}; setCurrent({id:user.id,username:user.username}); render(); return {ok:true}}
function logout(){clearCurrent(); render();}

// Posts actions
function createPost(title,content){const cur=getCurrent(); if(!cur) { alert('Please login to create posts'); return } const posts=loadPosts(); const p={id:uid('p'),title,content,authorId:cur.id,author:cur.username,created:now(),updated:now()}; posts.unshift(p); savePosts(posts); renderPosts();}
function updatePost(id,title,content){const posts=loadPosts(); const p=posts.find(x=>x.id===id); if(!p) return; p.title=title; p.content=content; p.updated=now(); savePosts(posts); renderPosts();}
function deletePost(id){if(!confirm('Delete this post?')) return; const posts=loadPosts().filter(x=>x.id!==id); savePosts(posts); renderPosts();}

// UI: modals
function openModal(contentHtml){const wrap=$('#modalWrapper'); const modal=$('#modal'); modal.innerHTML=''; modal.appendChild(contentHtml); wrap.style.display='flex'}
function closeModal(){$('#modalWrapper').style.display='none';}
$('#modalWrapper').addEventListener('click', (e)=>{ if(e.target.id==='modalWrapper') closeModal(); })

// Renderers
function render(){renderTopControls(); renderSidebar(); renderPosts();}

function renderTopControls(){const d=$('#topControls'); d.innerHTML=''; const cur=getCurrent(); if(cur){ d.appendChild(el('div',{class:'center'}, el('div',{class:'badge'}, 'Signed in as '+cur.username))); d.appendChild(el('button',{class:'logout',onclick:()=>{logout()}}, 'Logout')); d.appendChild(el('button',{onclick:()=>openCreatePost()}, 'New Post')); } else { d.appendChild(el('button',{onclick:()=>openAuth('login')}, 'Login')); d.appendChild(el('button',{onclick:()=>openAuth('signup')}, 'Sign up')); }}

function renderSidebar(){const s=$('#sidebar'); s.innerHTML=''; const cur=getCurrent();
  if(cur){
    s.appendChild(el('h3',{}, 'Your account'));
    s.appendChild(el('div',{}, el('div',{class:'hint'}, 'Username: '+cur.username)));
    s.appendChild(el('div',{style:'height:8px'}));
    s.appendChild(el('button',{onclick:()=>openCreatePost()}, 'Create new post'));
    s.appendChild(el('div',{style:'height:12px'}));
    s.appendChild(el('h3',{}, 'Manage'));
    s.appendChild(el('div',{class:'field'}, el('label',{}, 'Search posts'), el('input',{type:'text',id:'searchInput',placeholder:'search by title or author', oninput:()=>renderPosts()})));
    s.appendChild(el('div',{class:'field'}, el('label',{}, 'Sort by'), el('select',{id:'sortBy', onchange:()=>renderPosts()}, el('option',{value:'new'},'Newest'), el('option',{value:'old'},'Oldest'), el('option',{value:'author'},'Author'))));
    s.appendChild(el('div',{style:'height:8px'}));
    s.appendChild(el('div',{class:'hint'}, 'Tip: Your posts are stored only in your browser localStorage.'));
  } else {
    s.appendChild(el('h3',{}, 'Welcome'));
    s.appendChild(el('div',{class:'hint'}, 'You can browse public posts and sign up to create your own.'));
  }
}

function renderPosts(){const feed=$('#feed'); feed.innerHTML=''; feed.className=''; const posts=loadPosts(); const searchVal=(document.getElementById('searchInput')||{}).value||''; const sortBy=(document.getElementById('sortBy')||{}).value||'new';
  let filtered=posts.filter(p=>{ if(!searchVal.trim()) return true; const s=searchVal.toLowerCase(); return p.title.toLowerCase().includes(s) || (p.author||'').toLowerCase().includes(s) || p.content.toLowerCase().includes(s) });
  if(sortBy==='old') filtered=filtered.slice().reverse().reverse().sort((a,b)=>a.created.localeCompare(b.created));
  if(sortBy==='author') filtered=filtered.slice().sort((a,b)=> (a.author||'').localeCompare(b.author||''));
  // default: posts stored newest-first so leave as is for new
  feed.appendChild(el('div',{}, el('div',{class:'card'}, el('div',{class:'flex', style:'justify-content:space-between;align-items:center'}, el('div',{}, el('h3',{}, 'All posts')), el('div',{}, el('span',{class:'hint'}, 'Total: '+filtered.length)))));
  if(filtered.length===0){ feed.appendChild(el('div',{class:'card empty'}, 'No posts yet — be the first!')) ; return }

  filtered.forEach(p=>{
    const postEl=el('article',{class:'post card'}, el('div',{}, el('div',{class:'flex', style:'justify-content:space-between'}, el('h4',{},p.title), el('div',{class:'meta'}, p.author))), el('div',{class:'meta'}, new Date(p.updated||p.created).toLocaleString()), el('p',{}, p.content.substring(0,120)+(p.content.length>120?'...':'')));
    const btns=el('div',{class:'post-actions'});
    const cur=getCurrent();
    const viewBtn=el('button',{class:'small btn ghost', onclick:()=>openViewPost(p.id)}, 'View'); btns.appendChild(viewBtn);
    if(cur && cur.id===p.authorId){ const editBtn=el('button',{class:'small', onclick:()=>openEditPost(p.id)}, 'Edit'); const delBtn=el('button',{class:'small', onclick:()=>deletePost(p.id)}, 'Delete'); btns.appendChild(editBtn); btns.appendChild(delBtn);}    
    postEl.appendChild(btns);
    feed.appendChild(postEl);
  });
}

// Modals: Auth, create/edit, view
function openAuth(mode='login'){
  const wrap=el('div',{}, el('div',{style:'display:flex;justify-content:space-between;align-items:center;margin-bottom:12px'}, el('h3',{}, mode==='login'? 'Login' : 'Sign up'), el('button',{onclick:()=>closeModal()}, 'Close')),
    el('div',{class:'field'}, el('label',{}, 'Username'), el('input',{type:'text',id:'auth_user'})),
    el('div',{class:'field'}, el('label',{}, 'Password'), el('input',{type:'password',id:'auth_pass'})),
    el('div',{style:'display:flex;gap:8px;justify-content:flex-end'}, el('button',{onclick:()=>closeModal(), class:'btn ghost'}, 'Cancel'), el('button',{onclick:()=>{const u=$('#auth_user').value.trim(); const p=$('#auth_pass').value; let res; if(mode==='login') res=login(u,p); else res=signup(u,p); if(!res.ok) alert(res.msg); else closeModal()}}, mode==='login'?'Login':'Sign up'))
  );
  openModal(wrap);
}

function openCreatePost(){ const form=el('div',{}, el('div',{style:'display:flex;justify-content:space-between;align-items:center;margin-bottom:12px'}, el('h3',{}, 'New Post'), el('button',{onclick:()=>closeModal()}, 'Close')),
    el('div',{class:'field'}, el('label',{}, 'Title'), el('input',{type:'text',id:'p_title'})),
    el('div',{class:'field'}, el('label',{}, 'Content'), el('textarea',{id:'p_content'})),
    el('div',{style:'display:flex;justify-content:flex-end;gap:8px'}, el('button',{onclick:()=>closeModal(), class:'btn ghost'}, 'Cancel'), el('button',{onclick:()=>{const t=$('#p_title').value.trim(); const c=$('#p_content').value.trim(); if(!t||!c) return alert('Title and content required'); createPost(t,c); closeModal()}}, 'Publish')));
  openModal(form);
}

function openEditPost(id){ const posts=loadPosts(); const p=posts.find(x=>x.id===id); if(!p) return; const form=el('div',{}, el('div',{style:'display:flex;justify-content:space-between;align-items:center;margin-bottom:12px'}, el('h3',{}, 'Edit Post'), el('button',{onclick:()=>closeModal()}, 'Close')),
    el('div',{class:'field'}, el('label',{}, 'Title'), el('input',{type:'text',id:'p_title', value:p.title})),
    el('div',{class:'field'}, el('label',{}, 'Content'), el('textarea',{id:'p_content'}, p.content)),
    el('div',{style:'display:flex;justify-content:flex-end;gap:8px'}, el('button',{onclick:()=>closeModal(), class:'btn ghost'}, 'Cancel'), el('button',{onclick:()=>{const t=$('#p_title').value.trim(); const c=$('#p_content').value.trim(); if(!t||!c) return alert('Title and content required'); updatePost(id,t,c); closeModal()}}, 'Save')));
  openModal(form);
}

function openViewPost(id){ const posts=loadPosts(); const p=posts.find(x=>x.id===id); if(!p) return; const cur=getCurrent(); const view=el('div',{}, el('div',{style:'display:flex;justify-content:space-between;align-items:center;margin-bottom:12px'}, el('h3',{}, p.title), el('button',{onclick:()=>closeModal()}, 'Close')),
    el('div',{class:'meta'}, 'By '+p.author+' • '+new Date(p.created).toLocaleString()), el('div',{style:'height:12px'}), el('div',{}, p.content), el('div',{style:'height:12px'}));
  if(cur && cur.id===p.authorId){ view.appendChild(el('div',{style:'display:flex;gap:8px;justify-content:flex-end'}, el('button',{onclick:()=>{closeModal(); openEditPost(id)}}, 'Edit'), el('button',{onclick:()=>{closeModal(); deletePost(id)}}, 'Delete')))}
  openModal(view);
}

// Initialize example data if none
function seedIfEmpty(){ if(loadPosts().length===0){ savePosts([{id:uid('p'),title:'Welcome to LocalBlog',content:'This is a sample post. Sign up and create your own posts. All data is stored only in your browser localStorage.',author:'admin',authorId:'u_admin',created:now(),updated:now()}]) } }

// Initial boot
seedIfEmpty(); render();

// Expose for console debugging (optional)
window.__LocalBlog={loadPosts,loadUsers,render,createPost,updatePost,deletePost,login,signup,logout}