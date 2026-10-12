(() => {
  const KEY = "caderno_um_defeito_de_cor_v2";
  const initialNotes = [
    {id:"p-kehinde",category:"personagens",title:"Kehinde",body:"Protagonista e voz central da narrativa. Até aqui, acompanhamos a infância dela, as perdas familiares, a captura e os primeiros momentos no Brasil. Registrar como ela reage ao que vive, não só o que acontece.",tag:"protagonista",status:"confirmado até aqui",page:"início–≈80",accent:"green"},
    {id:"p-taiwo",category:"personagens",title:"Taiwo — irmã gêmea",body:"Irmã gêmea de Kehinde. As duas compartilham as perdas da família e acabam capturadas. Taiwo demonstra receio diante da ideia de ir ver os brancos; esse contraste ajuda a lembrar que as irmãs não reagem sempre da mesma forma.",tag:"família",status:"confirmado até aqui",page:"início",accent:"gold"},
    {id:"p-mae",category:"personagens",title:"Mãe de Kehinde",body:"Sua morte é uma das grandes rupturas da infância de Kehinde. É importante lembrar a sequência das perdas familiares e como elas mudam o caminho das meninas.",tag:"família · perda",status:"acontecimento central",page:"início",accent:"rose"},
    {id:"p-kokumo",category:"personagens",title:"Kokumo",body:"Irmão de Kehinde e Taiwo. Sua morte acontece antes da captura das meninas e marca profundamente o começo da narrativa.",tag:"família · perda",status:"acontecimento central",page:"início",accent:"rose"},
    {id:"p-avo",category:"personagens",title:"Avó de Kehinde",body:"Depois das mortes na família, torna-se uma presença fundamental para as meninas. Guarda conhecimentos e tradições, especialmente ligados à cultura e à espiritualidade de seu povo.",tag:"ancestralidade",status:"lembrar",page:"início",accent:"gold"},
    {id:"p-esmeria",category:"personagens",title:"Esméria",body:"Mulher que acolhe e orienta Kehinde quando ela chega à fazenda no Brasil. É uma figura importante de cuidado e sobrevivência no ambiente da escravização.",tag:"acolhimento",status:"confirmar detalhes no livro",page:"após a travessia",accent:"green"},
    {id:"p-florinda-ampliada",category:"personagens",title:"Nega Florinda — o que lembrar",body:"Mulher africana mais velha, alforriada, conhecida como contadora de histórias — uma “recontadeira”. É da nação Mina/Jeje, como Kehinde, e sua presença liga a protagonista à memória ancestral e aos saberes tradicionais. Anotar o que ela ensina diretamente na cena da mata.",tag:"oralidade · Jeje",status:"em leitura",page:"≈ 80–83",accent:"gold"},
    {id:"p-titilayo",category:"personagens",title:"Titilayo",body:"Nome que aparece nas lembranças do começo da história. Quero registrar aqui as relações e a fala do pai dela sem inventar a formulação: voltar ao trecho marcado e anotar a ideia com minhas palavras.",tag:"infância · fala marcante",status:"reler a passagem",page:"início",accent:"rose"},
    {id:"p-pai-titilayo",category:"personagens",title:"Pai de Titilayo",body:"Há uma fala dele que me chamou a atenção. Deixar este cartão como lembrete para voltar ao trecho e registrar o que ele diz e por que a fala importa, de preferência com minhas próprias palavras.",tag:"fala importante",status:"preciso completar",page:"início",accent:"gold"},
    {id:"a-perdas",category:"importante",title:"As primeiras perdas da família",body:"A morte de Kokumo e, depois, a morte da mãe de Kehinde quebram a vida que as meninas conheciam. É um ponto de virada: a família muda, e a avó passa a ter um papel central no caminho das netas.",tag:"família · ponto de virada",status:"confirmado até aqui",page:"início",accent:"rose"},
    {id:"a-uidá",category:"importante",title:"A ida para Uidá e a captura",body:"Depois das perdas, Kehinde, Taiwo e a avó chegam a Uidá. Kehinde quer ver os brancos, enquanto Taiwo não gosta da ideia. A decisão e a curiosidade das meninas acabam levando-as à situação em que são capturadas. É importante lembrar o contraste entre curiosidade infantil e o perigo real que as cerca.",tag:"captura · virada da narrativa",status:"confirmado até aqui",page:"início",accent:"rose"},
    {id:"a-travessia",category:"importante",title:"A travessia e a ruptura",body:"A captura leva a família ao tráfico transatlântico. A travessia representa uma ruptura brutal com a terra, a família e a vida conhecidas. Registrar os detalhes que mais me marcaram, sem tentar resumir tudo de uma vez.",tag:"deslocamento forçado",status:"lembrar",page:"início",accent:"gold"},
    {id:"a-destino",category:"importante",title:"A abertura — “O Destino”",body:"O início apresenta perdas familiares, memórias e referências culturais que ajudam a entender Kehinde. Ao reler, organizar os acontecimentos em ordem cronológica e separar o que aconteceu do que a narradora interpreta.",tag:"início do livro",status:"retomar quando necessário",page:"início",accent:"green"},
    {id:"a-fala-pai",category:"importante",title:"A fala do pai de Titilayo",body:"Quero guardar esta fala porque me chamou a atenção. Ainda não transcrevi nem resumi seu sentido para não depender da memória: reler a passagem e escrever aqui o que ele defende, aconselha ou revela sobre o contexto.",tag:"fala marcante",status:"reler e completar",page:"início",accent:"gold"},
    {id:"c-jeje-ampliado",category:"contexto",title:"Jeje / Mina — nota ampliada",body:"Jeje ou Mina-Jeje são denominações ligadas a povos e tradições da região do Golfo do Benim, incluindo o atual Benim e áreas vizinhas. No livro, essa ligação é importante para a identidade cultural de Kehinde e Nega Florinda. Não tratar povo, língua, cultura e religião como se fossem exatamente a mesma coisa.",tag:"cultura africana",status:"nota de contexto",page:"≈ 80",accent:"green"},
    {id:"c-abiku",category:"contexto",title:"Abíkú",body:"Conceito ligado a tradições iorubás, presente no começo do livro. Quero lembrar como a narrativa o apresenta e como se relaciona com a família de Kehinde, sem reduzir o conceito a uma explicação simples de “fantasma”.",tag:"conceito cultural",status:"retomar",page:"início",accent:"gold"},
    {id:"c-oralidade",category:"contexto",title:"Contar histórias é preservar memória",body:"Nega Florinda não é apenas alguém que entretém: a tradição oral preserva narrativas, conhecimentos e vínculos com os ancestrais. A forma de contar também importa — ritmo, gestos, suspense e a maneira própria de recontar.",tag:"memória · tradição oral",status:"ideia importante",page:"≈ 80–83",accent:"green"},
    {id:"r-perdas",category:"reflexoes",title:"O peso das perdas no começo",body:"Quero registrar o que senti com as mortes da mãe e de Kokumo e como a narrativa muda depois disso. O que mais me marcou? O que percebi na reação de Kehinde e Taiwo?",tag:"minha leitura",status:"responder com minhas palavras",page:"início",accent:"rose"},
    {id:"r-captura",category:"reflexoes",title:"A decisão de ir ver os brancos",body:"Essa passagem me marcou: Kehinde quer ir, Taiwo não gosta da ideia e a curiosidade acaba se cruzando com o perigo da captura. Quero registrar como interpretei a cena e o que senti ao ler.",tag:"minha leitura",status:"pessoal",page:"início",accent:"rose"},
    {id:"r-pergunta",category:"reflexoes",title:"O que quero observar durante a leitura",body:"Quero entender melhor os contextos culturais e históricos sem perder o fio da história. Também quero registrar o que me impacta, com minhas próprias palavras, e deixar dúvidas marcadas para conferir depois.",tag:"minha leitura",status:"pessoal",page:"atual",accent:"green"}
  ];
  let notes = loadNotes();
  let activeTab = "personagens";
  let editId = null;
  const titles = {personagens:"Personagens",importante:"Acontecimentos importantes",contexto:"Cultura & contexto",reflexoes:"Minhas reflexões",tudo:"Todas as anotações"};
  const $ = id => document.getElementById(id);
  function loadNotes(){
    try {
      const current=localStorage.getItem(KEY);
      if(current){const parsed=JSON.parse(current); if(Array.isArray(parsed.notes)) return parsed.notes;}
      // Migra automaticamente o caderno da versão anterior, mantendo as notas já criadas.
      const previous=localStorage.getItem("caderno_um_defeito_de_cor_v1");
      if(previous){
        const parsed=JSON.parse(previous);
        const oldNotes=Array.isArray(parsed.notes)?parsed.notes:[];
        const oldIds=new Set(oldNotes.map(n=>n.id));
        const added=initialNotes.filter(n=>!oldIds.has(n.id));
        return [...oldNotes,...added.map(n=>({...n}))];
      }
    } catch(e){}
    return initialNotes.map(n=>({...n}));
  }
  function save(){try{localStorage.setItem(KEY,JSON.stringify({notes, page:Number($("pageInput").value)||80, updatedAt:new Date().toISOString()}));}catch(e){toast("Não consegui salvar no navegador. Exporta um backup.");}}
  function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
  function catLabel(c){return {personagens:"Personagem",importante:"Acontecimento",contexto:"Cultura & contexto",reflexoes:"Reflexão"}[c]||c;}
  function render(){
    const q=$("search").value.trim().toLocaleLowerCase("pt-BR");
    const filtered=notes.filter(n=>(activeTab==="tudo"||n.category===activeTab)&&(!q||(n.title+" "+n.body+" "+n.tag+" "+n.status).toLocaleLowerCase("pt-BR").includes(q)));
    $("sectionTitle").textContent=titles[activeTab];
    $("count").textContent=filtered.length+(filtered.length===1?" anotação":" anotações");
    $("cards").innerHTML=filtered.length?filtered.map(n=>`
      <article class="note-card" style="--accent:${n.accent==="gold"?"#c18c49":n.accent==="rose"?"#a75c50":"#3d6654"}">
        <div class="meta" style="margin-top:0"><span class="pill ${n.accent==="gold"?"gold":n.accent==="rose"?"rose":"green"}">${esc(catLabel(n.category))}</span>${n.page?`<span>📖 ${esc(n.page)}</span>`:""}</div>
        <h3>${esc(n.title)}</h3><p>${esc(n.body)}</p>
        <div class="meta"><span class="pill">${esc(n.status||"anotação")}</span>${n.tag?`<span>· ${esc(n.tag)}</span>`:""}</div>
        <div class="card-actions"><button class="btn" data-edit="${esc(n.id)}">Editar</button><button class="btn" data-delete="${esc(n.id)}">Excluir</button></div>
      </article>`).join(""):`<div class="empty">Nenhuma anotação aqui ainda.<br>Quando quiser, registra algo que vale a pena lembrar.</div>`;
    $("cards").querySelectorAll("[data-edit]").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.edit)));
    $("cards").querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",()=>removeNote(b.dataset.delete)));
  }
  function openModal(id=null, preset=null){
    editId=id;
    const n=id?notes.find(x=>x.id===id):null;
    const val=n||preset||{category:activeTab==="tudo"?"personagens":activeTab,title:"",body:"",tag:"",status:"minha nota",page:String($("pageInput").value||80),accent:"green"};
    $("modalRoot").innerHTML=`<div class="modal-backdrop" id="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-head"><h2 id="modalTitle">${id?"Editar anotação":"Nova anotação"}</h2><button class="close" id="closeModal" aria-label="Fechar">×</button></div>
      <form id="noteForm">
        <div class="field"><label for="nTitle">Título</label><input id="nTitle" required maxlength="100" value="${esc(val.title)}" placeholder="Ex.: Nega Florinda"></div>
        <div class="field"><label for="nCategory">Categoria</label><select id="nCategory">
          ${Object.entries(titles).filter(([k])=>k!=="tudo").map(([k,v])=>`<option value="${k}" ${val.category===k?"selected":""}>${v}</option>`).join("")}
        </select></div>
        <div class="field"><label for="nBody">Minha anotação</label><textarea id="nBody" required maxlength="4000" placeholder="Escreve com tuas palavras…">${esc(val.body)}</textarea></div>
        <div class="field"><label for="nTag">Palavra-chave (opcional)</label><input id="nTag" maxlength="60" value="${esc(val.tag||"")}" placeholder="Ex.: memória, família, tradição"></div>
        <div class="field"><label for="nStatus">Lembrete / certeza</label><input id="nStatus" maxlength="60" value="${esc(val.status||"")}" placeholder="Ex.: confirmar, rascunho, importante"></div>
        <div class="field"><label for="nPage">Página ou parte</label><input id="nPage" maxlength="40" value="${esc(val.page||"")}" placeholder="Ex.: 80 ou O Destino"></div>
        <div class="form-actions"><button type="button" class="btn" id="cancelModal">Cancelar</button><button type="submit" class="btn primary">Salvar anotação</button></div>
        <p class="smallprint">Dica: se não tiver certeza, registra a dúvida em vez de tentar adivinhar.</p>
      </form></section></div>`;
    const close=()=>{$("modalRoot").innerHTML="";};
    $("closeModal").onclick=close;$("cancelModal").onclick=close;
    $("backdrop").addEventListener("click",e=>{if(e.target.id==="backdrop")close();});
    $("noteForm").addEventListener("submit",e=>{
      e.preventDefault();
      const item={id:id||("n-"+Date.now()+"-"+Math.random().toString(36).slice(2,7)),title:$("nTitle").value.trim(),category:$("nCategory").value,body:$("nBody").value.trim(),tag:$("nTag").value.trim(),status:$("nStatus").value.trim(),page:$("nPage").value.trim(),accent:val.accent||"green"};
      if(id){const i=notes.findIndex(x=>x.id===id);if(i>=0)notes[i]=item;}else notes.unshift(item);
      save();render();close();toast("Anotação salva.");
    });
    $("nTitle").focus();
  }
  function removeNote(id){const n=notes.find(x=>x.id===id);if(!n)return;if(confirm(`Excluir “${n.title}”?`)){notes=notes.filter(x=>x.id!==id);save();render();toast("Anotação excluída.");}}
  function toast(msg){$("toastRoot").innerHTML=`<div class="toast" role="status">${esc(msg)}</div>`;setTimeout(()=>{$("toastRoot").innerHTML="";},2600);}
  document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{activeTab=b.dataset.tab;document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));render();}));
  $("search").addEventListener("input",render);
  $("addBtn").onclick=()=>openModal();
  $("reflectionBtn").onclick=()=>openModal(null,{category:"reflexoes",title:"Uma coisa que me marcou",body:"",tag:"minha leitura",status:"pessoal",page:String($("pageInput").value||80),accent:"rose"});
  $("savePage").onclick=()=>{const p=Math.max(1,Number($("pageInput").value)||80);$("pageInput").value=p;$("pageLabel").textContent=p;save();toast("Página atualizada.");};
  $("pageInput").addEventListener("change",()=>{$("pageLabel").textContent=Math.max(1,Number($("pageInput").value)||80);});
  $("exportBtn").onclick=()=>{
    const payload={app:"Caderno de leitura — Um Defeito de Cor",version:1,page:Number($("pageInput").value)||80,exportedAt:new Date().toISOString(),notes};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="caderno-um-defeito-de-cor-backup.json";a.click();URL.revokeObjectURL(url);toast("Backup exportado.");
  };
  $("importBtn").onclick=()=>$("importFile").click();
  $("importFile").addEventListener("change",async e=>{
    const file=e.target.files[0];if(!file)return;
    try{const data=JSON.parse(await file.text());const incoming=Array.isArray(data)?data:data.notes;if(!Array.isArray(incoming))throw new Error("Formato inválido");
      if(confirm(`Importar ${incoming.length} anotações? Isso substituirá as anotações atuais deste caderno.`)){
        notes=incoming.filter(n=>n&&n.id&&n.title&&n.category&&n.body);if(data.page){$("pageInput").value=data.page;$("pageLabel").textContent=data.page;}save();render();toast("Backup importado.");
      }
    }catch(err){alert("Não consegui ler esse arquivo. Escolhe um backup JSON exportado por este caderno.");}
    e.target.value="";
  });
  try{const raw=localStorage.getItem(KEY);if(raw){const data=JSON.parse(raw);if(data.page){$("pageInput").value=data.page;$("pageLabel").textContent=data.page;}}}catch(e){}
  render();
})();
