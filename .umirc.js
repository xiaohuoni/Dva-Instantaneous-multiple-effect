export default {
    plugins: [
      ['umi-plugin-react', {
        dva:  true,
    
        antd: true,
        routes: {
          exclude: [/models\//],
        },
      }],
    ],
  };