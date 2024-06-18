import SmartTV from './SMATTV';
import Prompt from 'prompt-sync';
const prompt = Prompt()
class ControleRemoto {
    private tv: SmartTV;

    constructor(tv: SmartTV) {
        this.tv = tv;
    }

    public iniciarControle(): void {
        let opcao: string = '';

        console.log("Bem-vindo ao controle remoto da Smart TV!");

        while (opcao !== '0') {
            console.log("\nEscolha uma opção:");
            console.log("1. Ligar/Desligar TV");
            console.log("2. Mudar Canal");
            console.log("3. Aumentar Volume");
            console.log("4. Diminuir Volume");
            console.log("5. Adicionar Aplicativo");
            console.log("6. Verificar Status da Internet");
            console.log("7. Conectar à Internet");
            console.log("8. Desconectar da Internet");
            console.log("9. Criar Usuário");
            console.log("0. Sair");

            opcao = prompt("Opção: ");

            switch (opcao) {
                case '1':
                    this.tv.ligarDesligar();
                    break;
                case '2':
                    if (this.tv.verificartvligada()) {
                        let novoCanal = parseInt(prompt("Digite o novo canal: "));
                        this.tv.mudarCanal(novoCanal);
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '3':
                    if (this.tv.verificartvligada()) {
                        this.tv.aumentarVolume();
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '4':
                    if (this.tv.verificartvligada()) {
                        this.tv.diminuirVolume();
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '5':
                    if (this.tv.verificartvligada()) {
                        let app = prompt("Digite o nome do aplicativo a adicionar: ");
                        this.tv.adicionarAplicativo(app);
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '6':
                    if (this.tv.verificartvligada()) {
                        this.tv.verificarInternet();
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '7':
                    if (this.tv.verificartvligada()) {
                        this.tv.conectarInternet();
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '8':
                    if (this.tv.verificartvligada()) {
                        this.tv.desconectarInternet();
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '9':
                    if (this.tv.verificartvligada()) {
                        let usuario = prompt("Digite o nome do novo usuário: ");
                        this.tv.criarUsuario(usuario);
                    } else {
                        console.log("A Smart TV está desligada.");
                    }
                    break;
                case '0':
                    console.log("Desligando controle remoto.");
                    break;
                default:
                    console.log("Opção inválida. Escolha novamente.");
            }
        }
    }
}

export default ControleRemoto;
