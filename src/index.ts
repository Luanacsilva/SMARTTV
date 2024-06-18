import SmartTV from './classes/SMATTV';
import ControleRemotoLG from './classes/controle';

// Instanciando a SmartTV
const minhaSmartTV = new SmartTV();

const meuControleLG = new ControleRemotoLG(minhaSmartTV);

// Iniciando o controle remoto
meuControleLG.iniciarControle();
