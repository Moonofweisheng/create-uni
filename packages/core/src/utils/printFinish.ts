import type { spinner } from '@clack/prompts'
import type { getPkgManager } from './getPkgManager'
import { relative } from 'node:path'
import { note } from '@clack/prompts'
import { dim, lightGreen } from 'kolorist'
import { getCommand } from './getCommand'

export function printFinish(
  root: string,
  cwd: string,
  packageManager: ReturnType<typeof getPkgManager>,
  loading: ReturnType<typeof spinner>,
) {
  loading.stop('🎉 恭喜！您的项目已准备就绪。')
  const cdProjectName = () => {
    if (root !== cwd) {
      const cdProjectName = relative(cwd, root)
      return cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName
    }
  }

  const gettingStarted = `
${dim('$')} ${lightGreen(`cd ${cdProjectName()}`)}
${dim('$')} ${lightGreen(getCommand(packageManager, 'install'))}
${dim('$')} ${lightGreen(getCommand(packageManager, 'dev'))}
  `
  note(gettingStarted.trim().replace(/^\t\t\t/gm, ''), dim('Getting Started'))
  console.log()
}
