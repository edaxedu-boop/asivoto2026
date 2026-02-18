import { Party, Candidate } from './types';

export const PARTIES: Party[] = [
  {
    id: 'p1',
    name: 'UNIÓN CÍVICA',
    logoColor: 'bg-pink-300',
    logoInitial: 'U',
    hasCandidateImage: true,
    displayNumber: 21
  },
  {
    id: 'p2',
    name: 'FRENTE PROGRESISTA',
    logoColor: 'bg-blue-400',
    logoInitial: 'F',
    hasCandidateImage: true,
    displayNumber: 22
  },
  {
    id: 'p4',
    name: 'PARTIDO POLITICO COOPERACION POPULAR',
    logoColor: 'bg-white',
    logoInitial: 'C',
    hasCandidateImage: true,
    logoUrl: 'https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/2995',
    candidateImageUrl: 'https://i.imgur.com/R9pLTT5.jpeg',
    displayNumber: 23
  },
  {
    id: 'p3',
    name: 'ALIANZA NACIONAL',
    logoColor: 'bg-purple-300',
    logoInitial: 'A',
    hasCandidateImage: true,
    displayNumber: 24
  },
  {
    id: 'p6',
    name: 'CAMBIO DEMOCRÁTICO',
    logoColor: 'bg-yellow-200',
    logoInitial: 'C',
    hasCandidateImage: true,
    displayNumber: 25
  },
  {
    id: 'p7',
    name: 'MOVIMIENTO CIUDADANO',
    logoColor: 'bg-blue-200',
    logoInitial: 'M',
    hasCandidateImage: true,
    displayNumber: 26
  },
];

export const SENATOR_CANDIDATES: Candidate[] = [
  { id: 'sc1', number: 1, name: 'YONHY LESCANO ANCIETA', imageUrl: 'https://i.imgur.com/R9pLTT5.jpeg' },
  { id: 'sc2', number: 2, name: 'RUBITH VALLES ASCHIERI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0abd751f-b2d0-4562-a8b9-409042b9ac15.jpg' },
  { id: 'sc3', number: 3, name: 'CARLOS JAVIER ZEBALLOS MADARIAGA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/30cf6816-e067-4a51-af8e-8973af3a4704.jpg' },
  { id: 'sc4', number: 4, name: 'LUZ MARITZA CASSANA NAVARRO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/12bc23e0-9b43-4a2a-b348-0fc381a81809.jpg' },
  { id: 'sc5', number: 5, name: 'ALEXI AVILEZ GUTIERREZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e184c487-98d3-4f52-ba5c-605d42fdc985.jpg' },
  { id: 'sc6', number: 6, name: 'MARITZA MARILUZ RAMOS NICHO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/ca8bd44c-6369-487c-9be8-3cd87fd4fe90.jpg' },
  { id: 'sc8', number: 8, name: 'MARIA JUDITH TORRES AMASIFUEN DE HERNANDEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3d209935-ed8b-4f80-a6e0-68ce77da990c.jpg' },
  { id: 'sc9', number: 9, name: 'CARLOS ALBERTO TORRES CARO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/682e7cee-2ff2-428c-9e8d-a47cb222adca.jpg' },
  { id: 'sc10', number: 10, name: 'ELSA SUAREZ DE RAMOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/601dcf32-2166-4324-ad2e-ae3ac04d7936.jpg' },
  { id: 'sc11', number: 11, name: 'MIGUEL ANGEL PALOMINO PEDRAZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/885c1370-6e56-45e7-b9ea-c71beb777ee9.jpg' },
  { id: 'sc12', number: 12, name: 'RUTH RAQUEL GARCIA SANCHEZ DE ESPINOZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7ed1eb9f-fb69-4861-9535-bff0bf9dadce.jpg' },
  { id: 'sc13', number: 13, name: 'CARLOS ALCIDES TAPIA PONCE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7b29492d-ae24-4ea6-9e85-e938653f462e.jpg' },
  { id: 'sc14', number: 14, name: 'NEMESIA ROSENDA MALLQUI JARA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b8e9d07a-150c-4207-b707-e8bde1e240ff.jpg' },
  { id: 'sc16', number: 16, name: 'ARMANDINA PAREDES VELA DE ALQUIZAR', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3d67f8e7-0ded-4af9-9a92-04271e27f8cc.jpg' },
  { id: 'sc17', number: 17, name: 'JUAN DE LA CRUZ GALLEGOS PACO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/44068caa-36ad-4d5f-8bc5-dc99e7cdea96.jpg' },
  { id: 'sc18', number: 18, name: 'DORIS JUVITA CARRASCO REMIGIO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e46a597e-fc82-4724-81bf-e817ab118cc1.jpg' },
  { id: 'sc19', number: 19, name: 'CARLOS ANTONIO GUERRERO CARRASCO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/259c6f0e-adf0-48af-898d-ac9e86a0b14a.jpg' },
  { id: 'sc20', number: 20, name: 'LUDGARDA CESPEDES PUJAY', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7c6b4679-4d9b-47a5-9f00-8ecfb3d78cac.jpg' },
  { id: 'sc21', number: 21, name: 'JOSE LEONCIO HUERTAS YOVERA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/51bbe864-30c7-4171-b33a-75d8927d85f2.jpg' },
  { id: 'sc22', number: 22, name: 'EUGENIA VILLANUEVA AYLAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/105fd05a-df46-4147-aa42-1a82b4fe08a5.jpg' },
  { id: 'sc23', number: 23, name: 'FRANCISCO AUCCA ECHARRE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/944bf69e-4dae-4d8e-989c-aadb9bc69e51.jpg' },
  { id: 'sc24', number: 24, name: 'REYNA FLORES GUEVARA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0b274000-2510-4942-a2c7-cf234afc66a2.jpg' },
  { id: 'sc25', number: 25, name: 'WALTER SALAZAR ISIDRO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/ce9f32e4-b99c-44f5-a306-59b22cf57fa4.jpg' },
  { id: 'sc26', number: 26, name: 'IRIS ROCIO RUEDA CHUMPITAZI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3658ea54-b235-483c-b587-b7b7945cfc25.jpg' },
  { id: 'sc27', number: 27, name: 'CESAR AUGUSTO CALLE CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/2eee1dba-54d7-4f6b-a955-96d8dd1d9153.jpg' },
  { id: 'sc28', number: 28, name: 'ESPERANZA CHATE REMON', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4403e292-5a60-45c0-9355-5cbc8fb3978f.jpg' },
  { id: 'sc29', number: 29, name: 'AUGUSTO GIL MELENDEZ PELAEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/1051eda9-d63b-44ca-a31f-e07b10a6c193.jpg' },
  { id: 'sc30', number: 30, name: 'BENILDA AGUILAR ORTIZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f21bf572-4203-4c1a-b865-5407ad618096.jpg' },
];

export const REGIONAL_SENATOR_CANDIDATES: Record<string, Candidate[]> = {
  "Amazonas": [
    { id: 'amz2', number: 2, name: 'MERIDA DOLORES JACOBO REYES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4a229abe-bacf-4a08-8feb-75370cf4aa9e.jpg' }
  ],
  "Ancash": [
    { id: 'anc1', number: 1, name: 'FIDEL ALFREDO CLARO SINCHE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c333df03-9923-4420-b5cf-06268ab05434.jpg' },
    { id: 'anc2', number: 2, name: 'MARIA TERESA RIVERA ALTAMIRANO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/412feef4-76a5-4fb5-96ff-3bb1e352f360.jpg' }
  ],
  "Apurimac": [
    { id: 'apu1', number: 1, name: 'EMILIANO ORE ROJAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/bcb3cb31-5284-43a9-ab0d-fd9b3119ac41.jpg' },
    { id: 'apu2', number: 2, name: 'ROSA VILCA ESQUIVEL', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/9c098c53-6b70-4d30-9e10-f465d3f14b7f.jpg' }
  ],
  "Arequipa": [
    { id: 'are1', number: 1, name: 'BENIGNO LEONEL CABRERA PINO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3fde730e-b277-40c5-874b-4cceb15de353.jpg' },
    { id: 'are2', number: 2, name: 'GLADIS GUIA SERNA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/861f6357-3675-4fe9-8172-23d5904bcb27.jpg' }
  ],
  "Ayacucho": [
    { id: 'aya1', number: 1, name: 'ALEX RANDU FLORES RAMIREZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c3f022d1-c522-4b49-bd18-e0b5661ccef9.jpg' },
    { id: 'aya2', number: 2, name: 'CARMEN JUANA MOSCOSO YAURIVILCA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/97ec8af9-c0fe-490e-af01-f9144d37973e.jpg' }
  ],
  "Cajamarca": [
    { id: 'caj1', number: 1, name: 'PABLO ESMELIN ARIAS CARRERA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f0f065d1-343c-4d57-9a33-51ba63e164de.jpg' },
    { id: 'caj2', number: 2, name: 'LEIDY GIOVANNA YMAN ESPINOZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8e644e13-fa02-4dfb-aa7b-32d1d04c89c1.jpg' }
  ],
  "Cusco": [
    { id: 'cus1', number: 1, name: 'MACEDO VALERIANO RUEDA QUINTANA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/84a36c90-3eed-4968-9617-7b80cd3522bb.jpg' },
    { id: 'cus2', number: 2, name: 'MARGARITA VILLAVICENCIO SANCHEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/833d1be5-8c03-4c77-8c65-8e465a8e4599.jpg' }
  ],
  "Huancavelica": [
    { id: 'huv1', number: 1, name: 'EDGAR GOMEZ DE LA CRUZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/a8a7f384-9d37-4cc5-8767-f221baaa6546.jpg' },
    { id: 'huv2', number: 2, name: 'FELIPA QUISPE LIMACHI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/93879b2f-03b6-4dbf-b25d-9a3e4b676b5e.jpg' }
  ],
  "Ica": [
    { id: 'ica1', number: 1, name: 'VICTOR IRRAZABAL CCAHUANA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/82badf38-5b75-475f-852d-34869a56df54.jpg' },
    { id: 'ica2', number: 2, name: 'MARGARITA LUZ MITACC BENDEZU', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b571acf4-edef-402a-a71e-89d3504288a6.jpg' }
  ],
  "Junin": [
    { id: 'jun1', number: 1, name: 'CESAR VICTOR DAVILA VELIZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0ce56598-1e39-4e70-a392-63be56c57710.jpg' },
    { id: 'jun2', number: 2, name: 'ELIM SINAY DE LA PEÑA COILLAR', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/41b18d7b-cb7f-4c22-aebb-4d3aa56dba43.jpg' }
  ],
  "La Libertad": [
    { id: 'lal1', number: 1, name: 'ROBERTO CARLOS CHUQUIRUNA CACERES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5b9081f9-be20-4f84-a675-a306ac7914bf.jpg' },
    { id: 'lal2', number: 2, name: 'ZOILA KELLITA CAMACHO SIPIRAN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/af4c9970-dedf-44ca-8b91-8997b0f35fa4.jpg' }
  ],
  "Lambayeque": [
    { id: 'lam1', number: 1, name: 'JUAN CARLOS FERNANDEZ CHUÑE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/424aca1f-67a1-4f53-ab4f-351338146ee9.jpg' },
    { id: 'lam2', number: 2, name: 'MARIA JUANA RAICO OCAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/95e01966-ccfe-492c-b646-9571f0f4aea4.jpg' }
  ],
  "Lima Provincias": [
    { id: 'lip1', number: 1, name: 'FRANCISCO CAIRA YUCRA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f632b88f-d958-406f-aa77-5e28f0af58b0.jpg' },
    { id: 'lip2', number: 2, name: 'ZOILA TAMINCHI MARTINEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/151a8f87-ebb2-4afa-a942-ad9104f17a3e.jpg' }
  ],
  "Lima Metropolitana": [
    { id: 'lim1', number: 1, name: 'MARCOS ERNESTO GARFIAS DAVILA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/26adb3d2-48b3-4a55-8de9-99f84b7775ad.jpg' },
    { id: 'lim2', number: 2, name: 'MIRIAM MARTHA VERASTEGUI PORTOCARRERO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f535e2ba-0974-4e53-8b33-c16851ad1704.jpg' },
    { id: 'lim3', number: 3, name: 'YVAN CELEDONIO CONDORCUYA MENDOZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/ca62f304-0859-4956-912d-ba4df983d84a.jpg' },
    { id: 'lim4', number: 4, name: 'MARIA MERCEDES CARIO SEPULVEDA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e3dc4f3f-cb53-4b7d-9af6-6520b28d1a9a.jpg' }
  ],
  "Peruanos en el Extranjero": [
    { id: 'ext1', number: 1, name: 'MIGUEL CORTEZ NINA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/bd069616-d6ad-42a2-854c-b8509692c49d.jpg' },
    { id: 'ext2', number: 2, name: 'MARTHA ISABEL VELA REATEGUI DE DIAZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c7a78daf-ac8f-4dc2-97b4-c46d64f82e78.jpg' }
  ],
  "Loreto": [
    { id: 'lor1', number: 1, name: 'ANDRES EDUARDO MARMOL RENGIFO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/926b38a8-bd4b-43a3-b6f0-cbbcfdbbf84a.jpg' },
    { id: 'lor2', number: 2, name: 'ELIZABETH MONTANO VIENA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/cb5c122d-dea2-4b19-8d5d-b7a984e2fad4.jpg' }
  ],
  "Madre de Dios": [
    { id: 'mdd1', number: 1, name: 'CESAR VELA SANDOVAL', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/00a38b32-6983-4d0f-9350-e5812b34d2e7.jpg' },
    { id: 'mdd2', number: 2, name: 'PAULINA MAYORGA DAZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0febe1c2-263e-4e1f-a96e-5314763f4de7.jpg' }
  ],
  "Moquegua": [
    { id: 'moq1', number: 1, name: 'FREDDY SALAZAR LEGUIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8a8beb29-a418-42eb-9c47-073adcaf11f6.jpg' },
    { id: 'moq2', number: 2, name: 'ANGELICA TORRES AMASIFUEN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/ba82e5b0-dff7-4351-abd6-3c41479363e4.jpg' }
  ],
  "Pasco": [
    { id: 'pas1', number: 1, name: 'ANGEL ANIBAL ESPINOZA ALTEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/26174f95-e02a-47c8-9add-df499c547451.jpg' },
    { id: 'pas2', number: 2, name: 'EDIT MARIBEL ROJAS TELLO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4c2bdaef-f863-4a29-a1be-a06af4125532.jpg' }
  ],
  "Piura": [
    { id: 'piu1', number: 1, name: 'GUILLERMO COELLO GARCIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/39d1b293-8cfe-4134-9000-d3342188162b.jpg' },
    { id: 'piu2', number: 2, name: 'OLGA ZENOBIA NUÑEZ ECHEVARRIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/25e445d4-f4e1-4ad2-a170-63a5d735eb54.jpg' }
  ],
  "Puno": [
    { id: 'pun1', number: 1, name: 'JESUS ORLANDO ARAPA ROQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7c6b60eb-6f73-454b-95c5-3ead742357e1.jpg' },
    { id: 'pun2', number: 2, name: 'JUANA GONZALO CHOQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/592bfca0-41e8-4a26-a1ec-221057ce85c9.jpg' }
  ],
  "San Martin": [
    { id: 'sam1', number: 1, name: 'JACINTO ALACUTE ALARCON', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5714aef3-11ce-46a9-87c5-532bd7b2bd15.jpg' },
    { id: 'sam2', number: 2, name: 'CARMELA OCAS DE RAICO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0f00682e-4801-4148-8996-9f082d40be9c.jpg' }
  ],
  "Tacna": [
    { id: 'tac1', number: 1, name: 'GERARDO MAMANI ORDOÑEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/9f917224-d202-4595-a539-07666e416c30.jpg' },
    { id: 'tac2', number: 2, name: 'MARIBEL LIBERTAD SORIA REATEGUI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/51c581dd-a908-415b-97be-fd3e6d515735.jpg' }
  ],
  "Tumbes": [
    { id: 'tum1', number: 1, name: 'JOSE BELLASMIL SANTUR', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b63a82d8-3e26-48f2-9a1f-b1b5e75dd61b.jpg' },
    { id: 'tum2', number: 2, name: 'ZENAIDA LUISA MUCHA ROJAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/a886f43a-8d2d-4027-8fdc-3a0377bdd3ff.jpg' }
  ],
  "Callao": [
    { id: 'cal1', number: 1, name: 'EMILIO MARCELO CASTILLO JIMENEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/65889c71-fad8-401a-86f0-cede2a3d712f.jpg' },
    { id: 'cal2', number: 2, name: 'ELENA HUAZANGA SALDAÑA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/04149c30-de9c-404c-b71a-7779491a9630.jpg' }
  ],
  "Ucayali": [
    { id: 'uca1', number: 1, name: 'FELIX ARMANDO RIVAS SOLIS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4e2ce798-0dff-4591-aa2d-847d13625e2a.jpg' },
    { id: 'uca2', number: 2, name: 'MARITZA ANTAS FERNANDEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5161e924-d3d9-4654-a254-5ad57ff3521e.jpg' }
  ]
};

export const REGIONAL_DEPUTY_CANDIDATES: Record<string, Candidate[]> = {
  "Amazonas": [
    { id: 'damz1', number: 1, name: 'ELVIS ROBERT RAMOS GUEVARA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7dac169c-2b94-479f-b5b7-f5ac9124e047.jpg' },
    { id: 'damz2', number: 2, name: 'MILAGROS NATIVIDAD MONTANO VIENA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/69c192ce-5761-483c-bf0b-417f5d36f1d3.jpg' },
    { id: 'damz3', number: 3, name: 'JACK GARY SALAZAR VELAZQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e950386c-b492-4be1-8ea6-7089fb23a646.jpg' },
    { id: 'damz4', number: 4, name: 'DILCIA ANGELES MENDOZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/ba1b45de-0b1c-46b0-b187-7f5b29b792db.jpg' }
  ],
  "Ancash": [
    { id: 'danc1', number: 1, name: 'CESAR ALEJANDRO ZELADA RABANAL', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/42b88780-74d8-493b-89f3-8a006a405ea4.jpg' },
    { id: 'danc2', number: 2, name: 'JOSELYN BRIGITTE SANCHEZ SAENZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/12d36e63-ff9f-4ff2-8a88-4a1c3e91ec6e.jpg' },
    { id: 'danc3', number: 3, name: 'ROGER JAIME MUÑOZ GARCIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/9de556b2-7ac1-4d12-a55b-83e92cc5e27c.jpg' },
    { id: 'danc4', number: 4, name: 'CIRILA VALERIANA TORRES PONTE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8b61e336-8a43-4684-9974-bb09fd98bf8d.jpg' },
    { id: 'danc5', number: 5, name: 'SANDRO MOISES MESONES PINTADO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7e55a6f7-fef6-4a61-9521-b7dc1e9499a8.jpg' },
    { id: 'danc6', number: 6, name: 'JHOANY KNIGNTLEY CHUQUILLANQUE CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0b423e52-531d-4017-886d-30fd04e24043.jpg' }
  ],
  "Apurimac": [
    { id: 'dapu1', number: 1, name: 'BENEDICTO MACHACCA LOAYZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/65037cb9-5564-47ad-b4c5-8cde5b3fae43.jpg' },
    { id: 'dapu2', number: 2, name: 'ANGELICA TORRES VELASQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c3e3c889-feb8-49f2-b113-8758a70e17ae.jpg' },
    { id: 'dapu3', number: 3, name: 'EFRAIN TORRES VELAZQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4c3c6ede-a1d2-4d83-b3c0-49adee347721.jpg' },
    { id: 'dapu4', number: 4, name: 'RAQUEL BLANCA PULTAY HUARACA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6a2651ad-d463-4ded-85bc-83ce99887c5a.jpg' }
  ],
  "Arequipa": [
    { id: 'dare1', number: 1, name: 'CUBER MOISES HERRERA RAMOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b29ab3f8-0fdb-43e7-ae03-d35a36d9b45c.jpg' },
    { id: 'dare2', number: 2, name: 'VANESSA RUBITH LAZO VALLES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/97ea549d-873a-4a4f-86ac-fde9830a5bb1.jpg' },
    { id: 'dare3', number: 3, name: 'GEAN HUAMAN JULCA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f9d13308-d517-489d-aeaf-4be83de594cb.jpg' },
    { id: 'dare4', number: 4, name: 'FIORELLA LIZBETH CONDORI RAMOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/33295b6c-17b3-4a59-b65b-297b2143ef92.jpg' },
    { id: 'dare5', number: 5, name: 'BRYAN IRVING PONCE CERPA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/620b6e6d-739e-4d71-9b38-06f64d10833f.jpg' },
    { id: 'dare6', number: 6, name: 'VILMA RUTH GUTIERREZ QUISPE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/604a11c8-53fd-4adf-82fc-657b382634ca.jpg' }
  ],
  "Ayacucho": [
    { id: 'daya1', number: 1, name: 'PATRICIA ROSA MAXI VELAZQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6119cd9a-0e96-462e-93a7-10ebdae335f8.jpg' },
    { id: 'daya2', number: 2, name: 'DASIO QUISPE CUADROS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f2bbeb10-7ef4-41a9-aa53-f0804d0c6976.jpg' },
    { id: 'daya3', number: 3, name: 'CLAUDIA SOLEDAD ROJAS TORRES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/cdaa4863-f1ec-4cec-8f61-1c3e1dd2528c.jpg' },
    { id: 'daya4', number: 4, name: 'RODIL PILLACA ORTEGA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/a4fcd704-b8b6-4cc4-a5df-6393ac26c4ab.jpg' }
  ],
  "Cajamarca": [
    { id: 'dcaj1', number: 1, name: 'MARGARITA SAAVEDRA CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/460f6702-df92-48c7-ba10-37e56f8a1ba2.jpg' },
    { id: 'dcaj2', number: 2, name: 'RICARDO ANTONIO CALLE LLAGUENTA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5e01441f-d36f-4afa-82bf-07115d967967.jpg' },
    { id: 'dcaj3', number: 3, name: 'CYNTHIA LUCÍA VALLEJOS RAVINES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/922107d7-9480-44bb-b7a0-c8fbc83cb796.jpg' },
    { id: 'dcaj4', number: 4, name: 'DIGMAR LEANDRO CALLE CORDOVA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4b11cc73-adf2-4430-b7de-29384f8c39b3.jpg' },
    { id: 'dcaj5', number: 5, name: 'MIRTHA CORDOVA PINTADO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/27338073-f7a5-4674-a802-402518031f59.jpg' },
    { id: 'dcaj6', number: 6, name: 'ROSMEL BURGA MEJIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8d7f9832-c2ef-48ae-905a-6ebbca05c60a.jpg' }
  ],
  "Cusco": [
    { id: 'dcus1', number: 1, name: 'JUAN CARLOS APAZA ALATA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b8f3c7a2-ca5f-4dce-9afe-7c8cc9e0897f.jpg' },
    { id: 'dcus2', number: 2, name: 'ALESSANDRA DALESKA OLIVERA SANCHEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/66794965-21e7-44d9-869f-a287b61f275e.jpg' },
    { id: 'dcus3', number: 3, name: 'DAVID FERNANDO CABALLERO LLANOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e148214b-b1e4-4839-86f3-fa14693234b3.jpg' },
    { id: 'dcus4', number: 4, name: 'MAGRETY FERNANDEZ BACA PAUCAR', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8df0d2b0-55cf-447d-af2b-2146cc719e77.jpg' },
    { id: 'dcus5', number: 5, name: 'HENRRY SANCHEZ CAMA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/395e21a7-5859-480e-85d7-db1923953704.jpg' },
    { id: 'dcus6', number: 6, name: 'DORIS CALLE VILLEGAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/76fbaca9-0e1c-4a94-9b6b-4e0050a1cdd2.jpg' }
  ],
  "Huancavelica": [
    { id: 'dhuv1', number: 1, name: 'DIOGENES MARINO RAMOS CASAVILCA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e13af51a-4c97-4326-bb13-ea38825a326b.jpg' },
    { id: 'dhuv2', number: 2, name: 'MAGNA ARCHI PORMACHI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/97feeb60-3c4f-4962-b32e-d31b6ca68968.jpg' },
    { id: 'dhuv3', number: 3, name: 'WILVER JULIO RIVEROS ESPINAL', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/992d7671-9ea8-4ef3-9902-fa658386db57.jpg' },
    { id: 'dhuv4', number: 4, name: 'ZENAIDA SUSY MONTESINOS TOLENTINO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8e584f51-d3d7-49bf-ae12-b63466764256.jpg' }
  ],
  "Huanuco": [
    { id: 'dhua1', number: 1, name: 'CHARITO MAMANI MATOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/d4a4243f-da6b-401e-9479-85e2e97e8f2d.jpg' },
    { id: 'dhua2', number: 2, name: 'MAXVEL FELIX MAXI VELAZQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e8f61f06-086c-4b37-8b84-eb551ef2bbbe.jpg' },
    { id: 'dhua3', number: 3, name: 'ROCIO DEL PILAR RIVERA CARDENAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/432a0986-4e54-41d9-a436-2878862d3719.jpg' },
    { id: 'dhua4', number: 4, name: 'SEGUNDINO SALVADOR PASCUAL', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3b05fde5-6c13-4c85-8aea-052cd76f38f5.jpg' }
  ],
  "Ica": [
    { id: 'dica1', number: 1, name: 'JUANA ISABEL TRUJILLO COLAN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/d2e71f76-8294-4aa5-afc9-fde882529818.jpg' },
    { id: 'dica2', number: 2, name: 'PIERRE ALEXANDER RODAS BORJA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/336ab154-2eb5-4d08-85a1-eb687ad598e8.jpg' },
    { id: 'dica3', number: 3, name: 'MARIA VICTORIA GAVILAN BENDEZU', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5caede26-c9b5-4d5f-97ef-b618d0d53da0.jpg' },
    { id: 'dica4', number: 4, name: 'ALFREDO MARIANO SANTIAGO JARAMILLO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/667ff4e2-3995-415a-82c2-6ca236c1a29d.jpg' }
  ],
  "Junin": [
    { id: 'djun1', number: 1, name: 'CRYSTHIAN HENRY SEGURA VILCHEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/a2a3cdf5-bbe7-4b49-9c6a-fe31b7ecdffb.jpg' },
    { id: 'djun2', number: 2, name: 'GIANELLA KIARA FLORES CARDENAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/d9fb493b-acd5-4cc0-9f9d-ed3198e44f6d.jpg' },
    { id: 'djun3', number: 3, name: 'ELMER MARTINEZ ABAD', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b98ec775-a1a8-44bb-aea9-6db4e983c015.jpg' },
    { id: 'djun4', number: 4, name: 'KENNITA V CARDENAS URBANO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/093f3940-809a-41be-a975-4d9ed86ec0b1.jpg' },
    { id: 'djun5', number: 5, name: 'SILVIO JOHON FLORES ROJAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6f127733-8000-4293-8e1f-43dee89bd36e.jpg' },
    { id: 'djun6', number: 6, name: 'LEYDI ISABEL CALDERON TORRES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5efbf6ca-dbbb-42cb-9554-0e16a8ab316c.jpg' }
  ],
  "La Libertad": [
    { id: 'dlal1', number: 1, name: 'JAIME ALBERTO MONTOYA GONZALEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7d4533bc-df7d-4fe1-a22b-78fe8aa9b3cf.jpg' },
    { id: 'dlal2', number: 2, name: 'ELISA MADAI RAICO OCAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/ffa8b4bb-a6f7-4b5f-a878-5b4c51bbc315.jpg' },
    { id: 'dlal3', number: 3, name: 'MILTON ORLANDO CONCEPCION RAICO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0f389b37-11c2-42a1-b23f-3d7184cb426c.jpg' },
    { id: 'dlal4', number: 4, name: 'CARMEN MARIA RAICO OCAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c5500afa-db95-4696-b2ea-de01ed4d6a4c.jpg' },
    { id: 'dlal5', number: 5, name: 'GUMERCINDO RAICO TIRADO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3f3a5353-4175-45d9-a37d-d0e0aa710bfe.jpg' },
    { id: 'dlal6', number: 6, name: 'FLORMIRA ESPINOZA FRANCISCO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/1d24dfb4-9304-41be-b52f-8acd491711ac.jpg' },
    { id: 'dlal7', number: 7, name: 'SHERMAN PONCE VELA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/45a18716-5a04-41ea-b5aa-9b22a931fa75.jpg' },
    { id: 'dlal8', number: 8, name: 'JANETH SOLEDAD MENDOZA BALDARRAGO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0b79f182-7f1c-48a2-9002-d53699ec111d.jpg' }
  ],
  "Lambayeque": [
    { id: 'dlam1', number: 1, name: 'CARMELA SILENE SALAZAR JAUREGUI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c7a8ded6-df89-4780-9364-d85922852d95.jpg' },
    { id: 'dlam2', number: 2, name: 'LUIS ENRIQUE BAZAN CENTURION', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/76dbd5ff-d4ac-44a7-89b8-21feac943d3e.jpg' },
    { id: 'dlam3', number: 3, name: 'DEYSI ROSALES SAAVEDRA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/770b63bd-4bd0-49ad-9f6d-0ad18aa66967.jpg' },
    { id: 'dlam4', number: 4, name: 'JOEL PERCY ZARMIENTO GUEDEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/481664e3-c932-412c-992d-4fb71da576a1.jpg' },
    { id: 'dlam5', number: 5, name: 'OTILIA HAROLD SALAS CORREA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c34fbb7e-0044-4ac0-84d2-77a114b1d4ee.jpg' },
    { id: 'dlam6', number: 6, name: 'EDIN YOEL CORDOVA PINTADO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6e543524-66b9-4d96-990f-3ff42c813d18.jpg' }
  ],
  "Lima Provincias": [
    { id: 'dlip1', number: 1, name: 'JACQUELINE YVONNE HUAMAN SILVA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8dcdddc0-6e7c-46b9-8c7a-bc4caeaf21a3.jpg' },
    { id: 'dlip2', number: 2, name: 'LIDER BERRIOS FIGUEROA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c8a50a52-c2c0-46e7-89ae-acef9435fe3c.jpg' },
    { id: 'dlip3', number: 3, name: 'MERY YANET RAMIREZ RAMOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/57939f23-5c5f-48a4-b5c0-596e83b9aa77.jpg' },
    { id: 'dlip4', number: 4, name: 'FRANZ ROGER MARCELO CANTU', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c0ca3f45-294d-418d-a49a-da900c1063e7.jpg' }
  ],
  "Lima Metropolitana": [
    { id: 'dlim1', number: 1, name: 'RAUL FERNANDO MITAC PORTUGAL', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e4f6a398-7bf1-443e-8df9-29ed11911975.jpg' },
    { id: 'dlim2', number: 2, name: 'ANA LOPEZ CUEVA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/352b462f-7de2-42c0-a57d-ad176ebf5a2a.jpg' },
    { id: 'dlim3', number: 3, name: 'GABRIEL HUGO PORTUGUEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/494bc0bc-1777-4e50-a86f-96f804ae99d6.jpg' },
    { id: 'dlim4', number: 4, name: 'MIRIAM YOVANA PALACIOS HUANJARES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c00e4ae1-29d9-41b5-bf35-269d66076efa.jpg' },
    { id: 'dlim5', number: 5, name: 'HERIBERTO MANUEL BENITEZ RIVAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/9881b4a1-41f1-485d-b487-b0fc57e7944c.jpg' },
    { id: 'dlim6', number: 6, name: 'SHEYLA KARINA CHAVEZ OBREGON', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/729765f3-1cea-4383-bb2c-b8d7a0896508.jpg' },
    { id: 'dlim7', number: 7, name: 'NESTOR GERMAN CRUZ OCHOA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/35960a11-8338-4f34-aec2-f7f66e326513.jpg' },
    { id: 'dlim8', number: 8, name: 'MARIA DEL CARMEN MANZANO MALONE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f29d3a77-91ec-45af-8686-825013eae9fd.jpg' },
    { id: 'dlim9', number: 9, name: 'HERBERHT OSIRIO VILLAFAN BRONCANO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e2e4247b-4801-4e94-885c-5f6885e6741a.jpg' },
    { id: 'dlim10', number: 10, name: 'JOSSELYN JUSBELY RAMOS VILCA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/22eb6c05-6d39-4e00-9c79-c8bbfb33fbc7.jpg' },
    { id: 'dlim11', number: 11, name: 'ABEL ESTEBAN JAVIER', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/1054be32-25f1-43c4-bd32-e2b16b8a73bc.jpg' },
    { id: 'dlim12', number: 12, name: 'SELENE PATRICIA MELEN REYES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/442e9280-2017-4031-9164-3594179f70d1.jpg' },
    { id: 'dlim13', number: 13, name: 'CARLOS ALBERTO CHOQUE CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6f6ea69b-3ea4-4f4c-bf62-9c745ece28db.jpg' },
    { id: 'dlim14', number: 14, name: 'MARIA ISABEL QUISPE FLORES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/d958eb98-ba27-414f-bb46-8a9888994857.jpg' },
    { id: 'dlim15', number: 15, name: 'WALTER RODOLFO RAMIREZ VERASTEGUI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/49561903-cd04-4580-8a41-18060a7bab21.jpg' },
    { id: 'dlim16', number: 16, name: 'KATYA MORELIA OBLITAS CARDOZO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/84316834-cf6d-4ad8-9f82-ef19345a01a6.jpg' },
    { id: 'dlim17', number: 17, name: 'ROMEL SARMIENTO RIVERA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5bd19ac5-f3c7-4c4e-bf51-2a79f80b60ea.jpg' },
    { id: 'dlim18', number: 18, name: 'MADELEYNE ROSMERY SOLANO FLORES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c0bf18b1-d742-4ed5-9376-97b700b2956e.jpg' },
    { id: 'dlim19', number: 19, name: 'NELSON TAPULLIMA SALAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b519027f-2dc4-4a6f-bd0c-7ecada0793c3.jpg' },
    { id: 'dlim20', number: 20, name: 'KIMBERLY SUE SANCHEZ ZAVALETA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/d3f318b8-4f7a-4c6a-95f0-1367c3a2c6f6.jpg' },
    { id: 'dlim21', number: 21, name: 'CHRISTIAN ARMANDO MANZANO MALONE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f4ef01dd-2aa2-48d2-aaa9-6b686c6b8229.jpg' },
    { id: 'dlim22', number: 22, name: 'GLORIA ESMERALDA PALOMINO EIZAGUIRRE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/480087c3-6d2d-4070-9c0b-a0bf29fdba43.jpg' },
    { id: 'dlim23', number: 23, name: 'DIEGO SEBASTIAN QUISPE PAUCAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/99444b54-8e91-4188-91fb-84f33188a767.jpg' },
    { id: 'dlim24', number: 24, name: 'JOCABETH RUTH ESPINOZA GARCIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b06401f2-b124-4744-a523-f498b70d8ad3.jpg' },
    { id: 'dlim25', number: 25, name: 'MILER CORDOVA CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3415cc09-9354-4aac-9793-6da34eeaa3e3.jpg' },
    { id: 'dlim26', number: 26, name: 'ELENA JESUSA NINALAYA POMAHUALI', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/cf678530-cba5-409a-8640-d01197f3edf8.jpg' },
    { id: 'dlim27', number: 27, name: 'DANNY YELSEN BERRIOS FIGUEROA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/ca750c3b-3495-4c75-bff1-da575b3f2ebf.jpg' },
    { id: 'dlim28', number: 28, name: 'MARICELIA TANGOA DA SILVA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/745ce7cb-94b8-4e9d-93b9-95dea796ffb6.jpg' },
    { id: 'dlim29', number: 29, name: 'DARIO JIMENEZ CHOQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/bc3f8f11-86b5-429d-bf2e-2b596fec58b8.jpg' },
    { id: 'dlim30', number: 30, name: 'YOLANDA CAMPOS LIMA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5a1e8a58-1ce1-469c-bc9e-47048758ab67.jpg' },
    { id: 'dlim31', number: 31, name: 'WILSON CASTILLO GARCIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/098ffc1a-bee7-47b4-b3ea-18af70192a0f.jpg' },
    { id: 'dlim32', number: 32, name: 'JESSENIA NOEMI SOSA LEON', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b320976e-9f5c-4410-bbcc-129e1ebb398b.jpg' }
  ],
  "Peruanos en el Extranjero": [
    { id: 'dext1', number: 1, name: 'JONATHAN LUIS TORRES MITACC', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/9194164c-5679-4855-8c60-0f4d5b8104a9.jpg' },
    { id: 'dext2', number: 2, name: 'ANA PRISCILA CARDENAS QUISPE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c1d3711e-b018-4a7a-a635-c5243f2797c0.jpg' },
    { id: 'dext3', number: 3, name: 'HIBAN CARLOS ESPINOZA FRANCISCO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4b9d9c25-3712-4a2d-a517-0db562e6dd0b.jpg' },
    { id: 'dext4', number: 4, name: 'LIZANIA SANCHEZ BARRANTES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0018a184-f5d4-4f90-99a5-7f079ad5d437.jpg' }
  ],
  "Loreto": [
    { id: 'dlor1', number: 1, name: 'MOISES ZARMIENTO GUEDES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/4a66b05f-0037-409e-8f90-d6631612c313.jpg' },
    { id: 'dlor2', number: 2, name: 'LEILY MELINA RAMIREZ VELA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/cd931882-c818-4e3b-9b02-d30ff1252ed2.jpg' },
    { id: 'dlor3', number: 3, name: 'ELMER MADRID RIOS HUAZANGA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/005d2c03-e28a-4322-b7b4-3300387b3191.jpg' },
    { id: 'dlor4', number: 4, name: 'MERLY GARCIA PINEDO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/cdf47f1e-685b-4595-bf17-9d124a88f122.jpg' }
  ],
  "Madre de Dios": [
    { id: 'dmdd1', number: 1, name: 'EDWIN SANCHEZ CAMA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f94512c3-50ce-4348-9f77-6e8680dcf8cc.jpg' },
    { id: 'dmdd2', number: 2, name: 'ROSALINA USHIÑAHUA SINARAHUA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e73f797a-0b67-4934-bcb0-b92afa860510.jpg' },
    { id: 'dmdd3', number: 3, name: 'ISAIAS JARA QUISPE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b18e5ff7-a73f-43be-8929-06b9b533b9cc.jpg' },
    { id: 'dmdd4', number: 4, name: 'ELIZABETH MARLENI PEDREGAL CONTRERAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c8d602e9-2178-4933-b34b-e30b98e8fb68.jpg' }
  ],
  "Moquegua": [
    { id: 'dmoq1', number: 1, name: 'LUIS ALBERTO APAZA APAZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/da3f31c0-63a4-44fd-85c2-a2487a90a57b.jpg' },
    { id: 'dmoq2', number: 2, name: 'SARA KARINA GUTIERREZ ARIAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e827f9ac-124b-4711-949b-77a028839d35.jpg' },
    { id: 'dmoq3', number: 3, name: 'TOMAS VARGAS VALDEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6e9c9d17-4223-4ff3-abd0-3a0faf572ba9.jpg' },
    { id: 'dmoq4', number: 4, name: 'YURI VANESA IBAÑEZ RAMOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e857ece8-7c74-44c6-9485-2aaaf4e610f1.jpg' }
  ],
  "Pasco": [
    { id: 'dpas1', number: 1, name: 'SILVIA RAQUEL MISHARI ASTETE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/1624118b-ad2b-4446-8773-cf33b8ea593e.jpg' },
    { id: 'dpas2', number: 2, name: 'JONAS CESPEDES MARTIN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6dc50a04-32e4-4426-a762-626903cec2e0.jpg' },
    { id: 'dpas3', number: 3, name: 'OLGA FERMINA ROJAS TELLO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/d63c80eb-79e2-41e3-81cd-9c89059f835f.jpg' },
    { id: 'dpas4', number: 4, name: 'EMERSON PALMA ACOSTA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/bbf6533f-1558-42a6-b0c8-d6e47235eaa3.jpg' }
  ],
  "Piura": [
    { id: 'dpiu1', number: 1, name: 'EDGAR GUZMAN CUSTODIO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/9a3517a8-01eb-4251-8b0a-c99ab4c4108b.jpg' },
    { id: 'dpiu2', number: 2, name: 'NELIRIA NOELI SAAVEDRA CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3deeaf4f-0a88-40a8-8243-ae32b4275b8b.jpg' },
    { id: 'dpiu3', number: 3, name: 'LUIS ANTHONY SILVA SERNAQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8eff2d06-cf1a-4d5a-9756-24d5d1c13020.jpg' },
    { id: 'dpiu4', number: 4, name: 'EBENIN ELIZABETH CONTRERAS TORRES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/535e2596-c91e-467c-9cf6-c37f8dc6f515.jpg' },
    { id: 'dpiu5', number: 5, name: 'DWIGHT LIVINGSTONE FLORES CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8bfe4849-d758-4cb3-bb5f-e2b4f0a5c919.jpg' },
    { id: 'dpiu6', number: 6, name: 'FIORELLA MILAGROS DEL PILAR TORRES RUEDA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/92da03e8-0062-4e65-91fe-c0cd62438acb.jpg' },
    { id: 'dpiu7', number: 7, name: 'JESUS ALEJANDRO CARDOZA NIZAMA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/82bf5b9b-555c-4358-a1f1-7eb5d872c6ff.jpg' },
    { id: 'dpiu8', number: 8, name: 'LLASMIN ORBE SALAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/673229ba-7a25-4693-b773-6d8ea6d12475.jpg' }
  ],
  "Puno": [
    { id: 'dpun1', number: 1, name: 'OSCAR GONZALES HUAMAN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/9385b9b4-306b-41ff-bcf1-25fe302110e8.jpg' },
    { id: 'dpun2', number: 2, name: 'MILAGROS SHANTALL SAMILLAN SANGA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/71bd570f-42b3-4c76-90b5-190f50824d49.jpg' },
    { id: 'dpun3', number: 3, name: 'CESAR FELIX QUISPE CALSIN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8a65ebc8-7e92-40cc-82ee-b71f3465b907.jpg' },
    { id: 'dpun4', number: 4, name: 'ROSA MARIA PEREZ MENDOZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/adaf3def-7341-48ee-bcb9-eb201a4933aa.jpg' },
    { id: 'dpun5', number: 5, name: 'ROLANDO ZAPATA VILCA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f7b496d9-a8d7-4fdc-a04c-66b222511090.jpg' },
    { id: 'dpun6', number: 6, name: 'KARINA LIZETH ALVA RAVINES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/012a24c0-6d5e-457b-bf2d-cfc550f6a81f.jpg' }
  ],
  "San Martin": [
    { id: 'dsam1', number: 1, name: 'CROVER SANCHEZ INGA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b1095d68-6e0a-473d-b383-6d2b82dd21f6.jpg' },
    { id: 'dsam2', number: 2, name: 'LINDA ERLITA CALLE CASTILLO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/672a3a69-c33a-453b-9419-a326e292dce7.jpg' },
    { id: 'dsam3', number: 3, name: 'CHRISTIAN PIERO ASTETE YIP', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/46212761-635b-4493-b8a9-0b2cfc084d28.jpg' },
    { id: 'dsam4', number: 4, name: 'JUANA SANGAMA SANGAMA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/f1bd7c89-71b3-4dbf-aaeb-422fee36f98f.jpg' }
  ],
  "Tacna": [
    { id: 'dtac1', number: 1, name: 'NEYELLKO GUTIERREZ QUISPE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3361760d-0736-4123-a11c-f69ae22e0444.jpg' },
    { id: 'dtac2', number: 2, name: 'YOLANDA MAMANI ORDOÑEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/00b7a2fb-43bb-47ee-bb9d-668c805009e1.jpg' },
    { id: 'dtac3', number: 3, name: 'JOHN OLIVERA MAYORGA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e9f5df13-b2f6-49f2-b864-b36b6e06d3c0.jpg' },
    { id: 'dtac4', number: 4, name: 'ABIGAIL ERIKA ECHEVARRIA ALANYA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7975cb04-c0ae-4fb1-9d58-8c2d13b5fece.jpg' }
  ],
  "Tumbes": [
    { id: 'dtum1', number: 1, name: 'LEONIDAS MONTALVAN RIMAYCUNA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/84603b69-dae5-44d7-98ac-fe42438ba9eb.jpg' },
    { id: 'dtum2', number: 2, name: 'MIRIAN CARMEN LAVADO BENAVIDES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/d3e8b133-6074-4575-b55f-35fdb0249fe8.jpg' },
    { id: 'dtum3', number: 3, name: 'WILMER PAICO YPANAQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/88b9c779-1849-4fca-8c17-9f489b3644e6.jpg' },
    { id: 'dtum4', number: 4, name: 'MARIA LUZLINDA ALCALDE FERNANDEZ', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/7105ae37-6f51-4397-9e65-749cced1ce99.jpg' }
  ],
  "Callao": [
    { id: 'dcal1', number: 1, name: 'LUIS ALBERTO SANCHEZ TENORIO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/3587b1bc-e528-4e4b-be66-2fa95254941b.jpg' },
    { id: 'dcal2', number: 2, name: 'SELFA EDADILD SAAVEDRA CALLE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/1fb7c9e7-daf7-411f-9b56-43f5ac329778.jpg' },
    { id: 'dcal3', number: 3, name: 'JACK LEANDRO RUIZ CALDERON', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/2316d2a8-ff39-4a8d-840f-58a83bf5fe0d.jpg' },
    { id: 'dcal4', number: 4, name: 'JAKELYN ALICIA GUTIERREZ BARRIENTOS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5791880e-65f3-4fb4-b722-49e5395116ec.jpg' }
  ],
  "Ucayali": [
    { id: 'duca1', number: 1, name: 'DAAC GRIMALDI FLORES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/12a86ed5-d595-4b34-8012-f469bae07096.jpg' },
    { id: 'duca2', number: 2, name: 'MARINA BONES OCHUPE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/553fdad4-32ec-4784-b020-2bd4a6ce1118.jpg' },
    { id: 'duca3', number: 3, name: 'JHON STIF FLORES CARDENAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/8478aded-a357-4f8e-ae08-72fb2277e66d.jpg' },
    { id: 'duca4', number: 4, name: 'KARINA MARGARITA ZEVALLOS HUAYCAMA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/0f67fda1-f2e3-4b9c-9d42-d70d6fd3e6db.jpg' }
  ]
};

export const PARLAMENTO_ANDINO_CANDIDATES: Candidate[] = [
  { id: 'pa1', number: 1, name: 'GABRIELA ROSA MAXI VELAZQUE', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/30b9c060-e09e-4156-86b1-79af295ebb13.jpg' },
  { id: 'pa3', number: 3, name: 'LILI MARLENE ARDIAN REYES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/91e28759-9a1e-4edb-85dc-74d532324a84.jpg' },
  { id: 'pa4', number: 4, name: 'MARCO ANTONIO VIZCARRA ALEGRIA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/79089364-6d81-42f0-be01-45155b201ea9.jpg' },
  { id: 'pa5', number: 5, name: 'YENY MARLENI RAMOS ROJAS', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/609696c5-3a58-4886-ba67-f8fbcb75cc0c.jpg' },
  { id: 'pa6', number: 6, name: 'JOSE DANNY VILCHEZ MIÑAN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/60826ace-c716-4224-8c03-6359c70c717e.jpg' },
  { id: 'pa7', number: 7, name: 'SINTHIA YASMIN TORRES MITACC', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e537f41f-807f-4ee8-9c95-90edb169b928.jpg' },
  { id: 'pa8', number: 8, name: 'MARCO OLIVERA MAYORGA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/b3c6e658-7247-4bd3-ae58-ce826d877bae.jpg' },
  { id: 'pa9', number: 9, name: 'ROSA CARINA JABO JABO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/a7cef6e2-e696-4edb-817a-d2da3f11a770.jpg' },
  { id: 'pa10', number: 10, name: 'WILSON JONATHAN SALAZAR PAREDES', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/c3281947-71f7-4dc3-9b79-aad83d526d1c.jpg' },
  { id: 'pa11', number: 11, name: 'JULIA YOLANDA HERRERA JULCA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/2e4bab78-cdd2-4dd1-9d8e-556cc2d635d8.jpg' },
  { id: 'pa12', number: 12, name: 'USIEL PALMA ACOSTA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/6e084337-4cbc-4296-8a1c-2a7b6ed7896f.jpg' },
  { id: 'pa13', number: 13, name: 'IRMA SANGAMA AMASIFUEN', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/5fb27b7a-5e34-461f-b7d2-4f851035910a.jpg' },
  { id: 'pa14', number: 14, name: 'ALEJANDRO JAVEL PEDROSO', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/e5ff27c4-d5e9-4ddb-8702-694157ae9f41.jpg' },
  { id: 'pa15', number: 15, name: 'GIOVANA RUBI ZEVALLOS HUAYCAMA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/33d87e19-4dc4-4bb0-a3ee-c9dbb2671c9c.jpg' },
  { id: 'pa16', number: 16, name: 'FREDY FELIX CASO VILCAPAZA', imageUrl: 'https://mpesije.jne.gob.pe/apidocs/fc9d071c-a7cb-473b-8d12-a27566939c76.jpg' },
];
