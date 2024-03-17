module.exports = (api) => {
  api.cache(true); //設定ファイル内で一度実行された関数は、キャッシュされる。ビルドの時間が短縮される。

  return {
    presets: [
      ['@babel/preset-env'],
      {
        targets: {
          //targetsプロパティのオブジェクトは、browserlistと互換性がある。
          ie: '11', //ieの11で動くようにしてください！
          chrome: '60', //chrome の60で動くようにしてください！
        },
      },
    ],
  };
};
