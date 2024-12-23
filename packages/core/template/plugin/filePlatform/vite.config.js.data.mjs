export default function getData({ oldData }) {
  const platformPlugin = {
    id: 'platform',
    importer: `import UniPlatform from '@uni-helper/vite-plugin-uni-platform'`,
    initializer: `// https://github.com/uni-helper/vite-plugin-uni-platform
    UniPlatform()`,
  }

  return {
    ...oldData,
    plugins: oldData.plugins.flatMap(plugin =>
      plugin.id === 'uni' ? [platformPlugin, plugin] : plugin,
    ),
  }
}
