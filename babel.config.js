module.exports = (api) => {
  api.cache(true); //設定ファイル内で一度実行された関数は、キャッシュされる。ビルドの時間が短縮される。

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          //targetsプロパティのオブジェクトは、browserlistと互換性がある。
          targets: [
            'last 1 version',
            '> 1%',
            'maintained node versions',
            'not dead',
          ],
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
  };
};
