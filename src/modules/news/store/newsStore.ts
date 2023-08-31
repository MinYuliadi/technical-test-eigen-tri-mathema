import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { iNewsStore, iList } from '../entities/newsStoreInterfaces'

export const newsStore = create<iNewsStore>()(
  devtools(
    persist(
      (set) => ({
        list: [],
        setList: (params: iList[]) => set((_) => ({ list: params })),
        loading: true,
        setLoading: (param: boolean) => set((_) => ({ loading: param })),
      }),
      { name: 'News-List' }
    )
  )
)