/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from './credentials';

//15f29bee-84ca-4ed0-a1b4-34071e4eaa5f

const body = {
	calendario: {
		expiracao: 3600,
	},
	devedor: {
		cpf: '84834994368',
		nome: 'Lindalva Pascoa',
	},
	valor: {
		original: '1.00',
	},
	chave: '15f29bee-84ca-4ed0-a1b4-34071e4eaa5f', // Informe sua chave Pix cadastrada na efipay	//o campo abaixo é opcional
	infoAdicionais: [
		{
			nome: 'Pagamento em',
			valor: 'NOME DO SEU ESTABELECIMENTO',
		},
		{
			nome: 'Pedido',
			valor: 'NUMERO DO PEDIDO DO CLIENTE',
		},
	],
};

const params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmMkVq229',
};



const efipay = new EfiPay(options);

efipay
	.pixCreateCharge(params, body)
	.then((resposta: any) => {
		console.log(resposta.loc.id);
		let params2 = {
			id: resposta.loc.id,
		};
		
		criarQRcode(params2);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});

function criarQRcode(params: any){
	efipay
	.pixGenerateQRCode(params)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
}



