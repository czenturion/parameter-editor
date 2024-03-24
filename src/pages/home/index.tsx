import ParamEditor from "@/features/param-editor";

const params = [
  {"id": 1, "name": "Назначение"},
  {"id": 2, "name": "Длина"},
  {"id": 3, "name": "15151456"},
];

const model = {
  "paramValues": [
    {"paramId": 1, "value": "повседневное"},
    {"paramId": 2, "value": "макси"},
    {"paramId": 3, "value": "максимка"},
  ]
};

const Home = () => {
  return <ParamEditor params={params} model={model}></ParamEditor>;
}

export default Home;