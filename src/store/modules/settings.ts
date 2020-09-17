import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
// import store from '@/vue-typescript-admin-template/src/store'
import store from './../../../src/store'
// import elementVariables from '@/vue-typescript-admin-template/src/styles/element-variables.scss'
import elementVariables from './../../../src/styles/element-variables.scss'
// import defaultSettings from '@/vue-typescript-admin-template/src/settings'
import defaultSettings from './../../../src/settings'

export interface ISettingsState {
  theme: string
  fixedHeader: boolean
  showSettings: boolean
  showTagsView: boolean
  showSidebarLogo: boolean
  sidebarTextTheme: boolean
}

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule implements ISettingsState {
  public theme = elementVariables.theme
  public fixedHeader = defaultSettings.fixedHeader
  public showSettings = defaultSettings.showSettings
  public showTagsView = defaultSettings.showTagsView
  public showSidebarLogo = defaultSettings.showSidebarLogo
  public sidebarTextTheme = defaultSettings.sidebarTextTheme

  @Mutation
  private CHANGE_SETTING(payload: { key: string, value: any }) {
    const { key, value } = payload
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as any)[key] = value
    }
  }

  @Action
  public ChangeSetting(payload: { key: string, value: any}) {
    this.CHANGE_SETTING(payload)
  }
}

export const SettingsModule = getModule(Settings)
