let teste = document.getElementById('validar'); 

teste.addEventListener('click', (e)=>{
    validaForm(e)
})

let alternar = document.getElementById('Alternar')

alternar.addEventListener('click', ()=>{

   
        
    

        const li =document.querySelectorAll("#ol li")

        li.forEach(function(e){
            e.innerHTML = " "
        })

        document.getElementById("JanelaModal").style.display = "none"
        document.getElementById("botoes").style.display = 'none'
        document.getElementById("div_validar").style.display = 'grid'

        const nome_disable = document.getElementById("Nome")
        const numero_disable = document.getElementById("Numero")
        const text_disable = document.getElementById("caixatexto")
        const masc = document.getElementById("masc")
        const fem =document.getElementById("Fem")
        const end1 = document.getElementById("duvidas");
        const end2 = document.getElementById("reclamacao");
        const end3 = document.getElementById("Doacao");
        masc.disabled = false
        fem.disabled = false
        end1.disabled = false
        end2.disabled = false
        end3.disabled = false
        nome_disable.disabled = false
        numero_disable.disabled = false
        text_disable.disabled = false
})

let limpar = document.getElementById('Limpar')

limpar.addEventListener('click', ()=>{

    
        const li =document.querySelectorAll("#ol li")

        li.forEach(function(e){
            e.innerHTML = " "
        })

        document.getElementById("JanelaModal").style.display = "none"
        document.getElementById("botoes").style.display = 'none'
        document.getElementById("div_validar").style.display = 'grid'

        const nome_disable = document.getElementById("Nome")
        const numero_disable = document.getElementById("Numero")
        const text_disable = document.getElementById("caixatexto")
        const masc = document.getElementById("masc")
        const fem =document.getElementById("Fem")
        const end1 = document.getElementById("duvidas");
        const end2 = document.getElementById("reclamacao");
        const end3 = document.getElementById("Doacao");
        masc.disabled = false
        fem.disabled = false
        end1.disabled = false
        end2.disabled = false
        end3.disabled = false
        nome_disable.disabled = false
        numero_disable.disabled = false
        text_disable.disabled = false
})



function validaForm (e){ 
  
    let formValido = true;
    console.log("ola")
    const formulario = document.getElementById('Formulario');

    const elementool = document.getElementById("ol");
 

    const nome = document.getElementById("Nome").value
    const numero = document.getElementById("Numero").value
   
    const masc = document.getElementById("masc")
    const fem =document.getElementById("Fem")
    const text = document.getElementById("caixatexto").value

    const n = nome.split(' ');
   

   

    const end1 = document.getElementById("duvidas");
    const end2 = document.getElementById("reclamacao");
    const end3 = document.getElementById("Doacao");
    const motivo = document.getElementById("motivo");

    const duvidas = document.getElementById("labelDuvidas")
    const reclamacao = document.getElementById("labelRecla")
    const doacao = document.getElementById("labelDoação")

    if(end1.checked === false && end2.checked == false && end3.checked ==false){    
       motivo.innerHTML = 'Escolha um motivo';
       duvidas.style.color = 'red'
       reclamacao.style.color = 'red'
       doacao.style.color = 'red'
       formValido = false;
    }

    


    if(nome ==="" || n.length <2 ){
        document.getElementById("erroNome").innerHTML = 'Usuário deve ser preenchido';
        document.getElementById('Nome').style.border = 'solid red';
        formValido = false;
    }

    if(numero =="" || numero.length <11 ){
      document.getElementById("erroNumero").innerHTML = 'Numero deve ser preenchido';
        document.getElementById('Numero').style.border = 'solid red';
        formValido = false;
    }

    

    

    if(!formValido){
        e.preventDefault();
    }else{
        e.preventDefault();

        document.getElementById("JanelaModal").style.display = 'block';
        document.getElementById("botoes").style.display = 'grid'
        document.getElementById("div_validar").style.display = 'none'
        end1.setAttribute('disabled','')
        end2.setAttribute('disabled','')
        end3.setAttribute('disabled','')
        const nome_disable = document.getElementById("Nome")
        const numero_disable = document.getElementById("Numero")
        const text_disable = document.getElementById("caixatexto")
        nome_disable.setAttribute('disabled','')
        numero_disable.setAttribute('disabled','')
        fem.setAttribute('disabled','')
        masc.setAttribute('disabled','')
        text_disable.setAttribute('disabled','')


        const novoLinome = document.createElement("li");
        novoLinome.append("Nome: "+nome);
        elementool.append(novoLinome);
        
       
        const novoLiNumero = document.createElement("li");
        novoLiNumero.append("Numero: "+numero);
        elementool.append(novoLiNumero);

        const novoLitext = document.createElement("li");
        novoLitext.append("Mensagem: "+text);
        elementool.append(novoLitext);


        if(masc.checked == true){
            const novoLitSexo = document.createElement("li");
            novoLitSexo.append("Sexo: "+masc.value);
            elementool.append(novoLitSexo);
        }
        if(fem.checked == false && masc.checked == false){
            const novoLitSexo = document.createElement("li");
            novoLitSexo.append("Sexo: Indefinido");
            elementool.append(novoLitSexo);
        }

        if(fem.checked == true){
            const novoLitSexo = document.createElement("li");
            novoLitSexo.append("Sexo: "+fem.value);
            elementool.append(novoLitSexo);
        }
        

        if(end1.checked == true){
            const novoLiMotivo = document.createElement("li");
            novoLiMotivo.append("Motivo contato: "+formDuvidas.value);
            elementool.append(novoLiMotivo);
        }

        if(end2.checked == true){
            const novoLiMotivo = document.createElement("li");
            novoLiMotivo.append("Motivo contato: "+formRecla.value);
            elementool.append(novoLiMotivo);
        }

        if(end3.checked == true){
            const novoLiMotivo = document.createElement("li");
            novoLiMotivo.append("Motivo contato: "+formDoa.value);
            elementool.append(novoLiMotivo);
        }
       
       
       
        
        


        
        




    }

 }

 close = document.getElementById("close").addEventListener('click', ()=>{
    document.getElementById("JanelaModal").style.display = "none"
 })

 