window.SimpleForm=class{constructor(t){this.config=t,this.form=document.querySelector(t.form),this.form&&"function"==typeof window.fetch&&(this.url=this.form.getAttribute("action"),this.formButton=this.form.querySelector(t.button),this.init())}displayError(){this.form.innerHTML=this.config.erro}displaySuccess(){this.form.innerHTML=this.config.sucesso}getFormValues(){const t=new FormData;return this.form.querySelectorAll("[name]").forEach(e=>{const r=e.getAttribute("name"),n=e.value;t.append(r,n)}),t}validateForm(){const t=this.form.querySelectorAll("[required]");let e=!0;return t.forEach(t=>{e&&(e=!!t.value)}),e}onSendForm(t){t.preventDefault(),t.currentTarget.disabled=!0,t.currentTarget.innerText="Enviando..."}sendForm(t){this.validateForm()&&(this.onSendForm(t),fetch(this.url,{method:"POST",body:this.getFormValues()}).then(t=>{if(!t.ok)throw Error(t.statusText);return t.text()}).then(t=>this.displaySuccess()).catch(t=>{this.displayError()}))}init(){this.sendForm=this.sendForm.bind(this),this.formButton.addEventListener("click",this.sendForm)}}

new SimpleForm ({

    form:".formphp",
    button:"#enviar",
    erro: '<div id="form-erro"><h2>Erro no envio</h2></div>',
    sucesso: '<div id="form-sucesso"><h2>Formulário enviado com sucesso!</h2><p>Retornaremos em breve.</p></div>',

});