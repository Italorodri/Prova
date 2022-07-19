<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

const registro_forms = ref({});
const router = useRouter();

async function login(){
  
   try {
      const response = await api.post("/auth/local", {
        identifier: registro_forms.value.email,
        password: registro_forms.value.password,
      });

      if(response.data) {
        router.push({path: "/"});
        return true;
      }

      return false;
    } catch (error) {
      alert("Usuário ou senha incorretos");
    }
}
</script>


<template>

    <div class="login">
        <div class="formularioLogin justify-content">          
            
            <h5 id="titulo">Acesse TÔ LENDO</h5>
            
            <form class="needs-validation"  @submit.prevent="login">
                
                <div class="form-floating m-3">
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" required v-model= "registro_forms.email">
                    <label for="email">Email:</label>
                    <div class="invalid-feedback">
                       Informe um email válido
                    </div>
                </div>
       
                <div class="form-floating m-3">
                    <input type="password" class="form-control" id="password" placeholder="Password" required v-model= "registro_forms.password">
                    <label for="senha">Senha:</label>
                    <div class="invalid-feedback">
                         Informe uma senha 
                    </div>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button type="submit" class="btn btn-primary rounded-pill w-100" id="butaoLogin" required>Entrar</button>
                <span>Não tem uma conta?<a href="">Inscreva-se </a></span>

                </form>
            </div>
        </div>

</template>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
}

h4{
    padding-top: 20px;
}

#titulo{
    margin-left: 16px;
}

.formularioLogin{ 
    width: 500px;
    background-color: white;
    border-radius: 10px;
}
</style>