class SmartTV {
    private ligada: boolean;
    private canalAtual: number;
    private volume: number;
    private aplicativos: string[];
    private internetConectada: boolean;
    private usuarios: string[];

    constructor() {
        this.ligada = false;
        this.canalAtual = 1;
        this.volume = 10; 
        this.aplicativos = [];
        this.internetConectada = false;
        this.usuarios = [];
    }
    public verificartvligada() {
        return this.ligada
    }
    public ligarDesligar(): void {
        this.ligada = !this.ligada;
        if (this.ligada) {
            console.log("A Smart TV foi ligada.");
        } else {
            console.log("A Smart TV foi desligada.");
        }
        this.exibirStatus();
    }

    public mudarCanal(novoCanal: number): void {
        if (this.ligada) {
            if (novoCanal >= 1 && novoCanal <= 15) {
                this.canalAtual = novoCanal;
                console.log(`Canal alterado para ${this.canalAtual}.`);
                this.exibirStatus();
            } else {
                console.log("Canal inválido. Escolha um canal entre 1 e 15.");
            }
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    public aumentarVolume(): void {
        if (this.ligada) {
            if (this.volume < 100) {
                this.volume++;
                console.log(`Volume aumentado para ${this.volume}.`);
                this.exibirStatus();
            } else {
                console.log("Volume no máximo.");
            }
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    public diminuirVolume(): void {
        if (this.ligada) {
            if (this.volume > 0) {
                this.volume--;
                console.log(`Volume diminuído para ${this.volume}.`);
                this.exibirStatus();
            } else {
                console.log("Volume no mínimo.");
            }
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    public adicionarAplicativo(app: string): void {
        if (this.ligada) {
            this.aplicativos.push(app);
            console.log(`Aplicativo ${app} adicionado.`);
            this.exibirStatus();
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    public verificarInternet(): void {
        if (this.ligada) {
            if (this.internetConectada) {
                console.log("Internet conectada.");
            } else {
                console.log("Internet desconectada.");
            }
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    public conectarInternet(): void {
        if (this.ligada) {
            this.internetConectada = true;
            console.log("Internet conectada.");
            this.exibirStatus();
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    public desconectarInternet(): void {
        if (this.ligada) {
            this.internetConectada = false;
            console.log("Internet desconectada.");
            this.exibirStatus();
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    public criarUsuario(nomeUsuario: string): void {
        if (this.ligada) {
            this.usuarios.push(nomeUsuario);
            console.log(`Usuário ${nomeUsuario} criado.`);
            this.exibirStatus();
        } else {
            console.log("A Smart TV está desligada.");
        }
    }

    private exibirStatus(): void {
        console.log(`Status da Smart TV:
        Ligada: ${this.ligada ? 'Sim' : 'Não'}
        Canal Atual: ${this.canalAtual}
        Volume: ${this.volume}
        Aplicativos: ${this.aplicativos.join(', ')}
        Internet: ${this.internetConectada ? 'Conectada' : 'Desconectada'}
        Usuários: ${this.usuarios.join(', ')}`);
    }
}

export default SmartTV;
