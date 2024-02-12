export default {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    pix_cert: process.env.PIX_CERT,
	validateMtls: false,
};