const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});
module.exports = {
  pwa: {
    //프리캐시할 파일 지정
    include: [/^index₩.html$/, /.css$/, /.js$/, /^manifest₩.json$/, /.png$/],
    //exclude 는 제거할 파일이 없어도 반드시 작성해야 제대로 동작함
    exclude: [],
  },
};
