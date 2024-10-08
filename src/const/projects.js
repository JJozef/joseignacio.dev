import { LogoZekaiApps, RocketIcon, ZwayAppIcon } from '@/components/ui/icons'

export const PROJECTS_DATA = [
  {
    title: 'zway.app',
    icon: <ZwayAppIcon className='bg-black text-white rounded-lg' />,
    description:
      'HTML, CSS y JavaScript sandbox, crea y comparte de manera sencilla y rápida tu código.',
    stack: [
      {
        name: 'Next.js',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4AbyUgWdCURTGs62QQAIJoKgI5C0BkwKgCCBKqGyEABREJABK/QsLQQHw9h8U0rASopCkoPS+na5bRq13e20dfnB993yf9849OsF6IpzEG9EkPoklseMs+VmTa5z8zs31SDwTNWJIbAmosOXaGr/7qNXcSpSJGQGNzHgP67XmEvFBKARuROG9JFHzF2JA4I8ZsN4qJWk2Fw8hXfrnMoF/Rj43Ew98WHAnytzzWD5iescAU+55fOvVSxfcbjfS6TQymQwkSbrY3OfzMa3f71cLUT3sCBcxvCBkDQ/V6/Xgcrl+1RYKBSwWCxSLRbUAX8ybr86tUABerVYLZrP5rDabzaLb7SKXy4lszFeC7W+IBBiPx5hMJlAUBaVSCXq9/kQbj8fRbreRTCZFZuGd0A0EA7DGqVQK6/Uaq9UKsVjsRBuJRFCv1xGNRkX3gm55TQCTyYRKpYJ9jUYjNnQ/tYFAAPl8HsFgUCAA89btRAN0Oh322S0WCwuzL1mWYbPZjlqv14tEIqH6Wji7qwMYDAZ25vF40O/32Xmj0YDRaGTndrsdoVAIDodDOMBSQwBGOBzGfD7HZrP5rr5qQTOEoihPi0UNouJABItG05pgE7EjJu26YDYKhvXeBMtX7GlgsRmX7PYoO+OuM98nwtiDWx+H+3N+0DQNGGMwDOPnTE3T5B7B51UAgiCgbVscx4F935EkCWhEiqJAkiTuJXxcBUAlyzKGYQC9dV3h+/4zlPw4J6ITAFSu62JZFtAjMKqqgtO6vXFQ8TkAqiiKQEu5bRvquoYoitxUzCVGVVUhTdNfP87zHPM8Y5omhGHILUa3yTF1h7o1jiO6roNt21xyfKshoflTt/q+R5ZlxA9chuRWS2ZZFoqiQFmWCIKAzvXUkt1uSh3HQRzHZEygaRqXKb3VlhMrkkZ4ngdd12l5uWz5rcGEWi/L8pckSR+CILz+STRjjL0zxl7+ZTi9Gs/rZ+L5N8AJA23K4ax1AAAAAElFTkSuQmCC'
      },
      {
        name: 'TailwindCSS',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8UlEQVR4Ae2XNZTbQBCG5TBzUl4VZj6+cH8pw0xNqHN10L8w9MVVgSoce+2kCUMVxjbUJSLTb/uXNH4rHYRJ731vRyt5Z3ZIa+OPu/5fNUkrBNMbf5BSVaEwBnqDPhLOxaRh33wtVJ91xQnIJMwrmiHqKw2pSZmacsojQTNoAydJK1jJZwboRWiE/bWxpvKEGatRJQPi4CPIgxxHKX8C7Xh3YM01h97wjeDG7Iq1I2Ju+i80Xc4a1crsA/k0lWSBRVxBhs/y4D6oAsIIjRjo1dXuvR8f5MIZjgT3uiccym/ABP6+L4gJxX2qy5scFmpAbdKUyqu5YAfjvBhsAOkwI4jL8S2Y5OfF2bwhDBkH2iI9IJLoKFgt58Qi8QgjpLfeg/XIiyELrlvYnNUP903gBdjfVQgGgRmUg3qnzPk9gUItRFniGfIQvOT9zWJiB25ns6lN2sDfJWE4EloS9aW8SyiVCZmj7IRUy3QQ0uW4y8akazSAOpRNvXIMsXO63yS+J1aAN1KRRMw9BnO8JJfKe8kOVlteeEQJBVnRA7IjKq1ahoCt4Dxd/YG85NwmMKgahlNfkHClslClmG+KWoCLD/GVKptG2KIFl+egJNgAveSFVnZJaf0cuqcrF76hu8vuLxqRdrUQzscuF4Dqq7axEGghJJ4wnYkhFTmivLKUXWHQLq3JgOoUvUKPBNBT9IRsu8UXb3LRlyyV93oZAb3c9nRRojPAIMqRH539bApNoF8t3Mk4rxeGZLRwBHNx4X7ZrFaziXEu2oA2MM5f5G5eLjKJ7ZT1HWlEmu15Mdt1B+ervYRFf4k0YBjLopwgCa3JTBD17VCxbgQR9weDaokOgVb/AlkhVfzE5mVCCizi5cvp4iccn/IgNMqMMEAqv2pyzqw0IvGlOA4E7SHVIuWPIA4vYtfM/q86H+pGyCPWSMa5FZwkbaCZz/RzYcr8ynNhIuxcaPO+e4dSHGy/038BRbo6lquvOJZ/TWg4avxx1/+rAHVbhJLs9OHAAAAAAElFTkSuQmCC'
      },
      {
        name: 'shadcn',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAZ0lEQVR4Ae3MMREAIQxEUepYQAZGUuElmlLEAEoQgQGay5yAa45tmP31n1cYuzwRiQgzQ+ljjL23qgL13vt/jTr11pq754PS11pzztyAeq31pE49iwignpmZqqL0j9wdqGfyVhi7rAdZJpDQclU3QAAAAABJRU5ErkJggg=='
      },
      {
        name: 'Monaco Editor',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik0xMDI0IDEwMjRIMFYwaDEwMjR2MTAyNHoiIHN0eWxlPSJmaWxsOiNmNmY2ZjY7ZmlsbC1vcGFjaXR5OjAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAyNCA4NS4zMzN2ODUzLjMzM0gwVjg1LjMzM2gxMDI0eiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwYXRoIGQ9Ik0wIDg1LjMzM2gyOTguNjY3djg1My4zMzNIMFY4NS4zMzN6bTEwMjQgMHY4NTMuMzMzSDM4NFY4NS4zMzNoNjQwem0tNTU0LjY2NyAxNjBoMzQxLjMzM3YtNjRINDY5LjMzM3Y2NHptMzQxLjMzNCA1MzMuMzM0SDQ2OS4zMzN2NjRoMzQxLjMzM2wuMDAxLTY0em0xMjgtMTQ5LjMzNEg1OTcuMzMzdjY0aDM0MS4zMzNsLjAwMS02NHptMC0xNDkuMzMzSDU5Ny4zMzN2NjRoMzQxLjMzM2wuMDAxLTY0em0wLTE0OS4zMzNINTk3LjMzM3Y2NGgzNDEuMzMzbC4wMDEtNjR6IiBzdHlsZT0iZmlsbDojMTY3YWJmIi8+PC9zdmc+'
      }
    ],
    image: '/projects/zway-app.png',
    demo: 'https://zway.vercel.app',
    repo: 'https://github.com/JJozef/zway.app'
  },
  {
    title: 'avzx',
    icon: (
      <LogoZekaiApps className='bg-white text-black dark:bg-black dark:text-white rounded-lg' />
    ),
    description:
      'Avatares predeterminados que se integran fácilmente en aplicaciones para ofrecer imágenes de perfil por defecto, con la posibilidad de personalización.',
    stack: [
      {
        name: 'Next.js',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4AbyUgWdCURTGs62QQAIJoKgI5C0BkwKgCCBKqGyEABREJABK/QsLQQHw9h8U0rASopCkoPS+na5bRq13e20dfnB993yf9849OsF6IpzEG9EkPoklseMs+VmTa5z8zs31SDwTNWJIbAmosOXaGr/7qNXcSpSJGQGNzHgP67XmEvFBKARuROG9JFHzF2JA4I8ZsN4qJWk2Fw8hXfrnMoF/Rj43Ew98WHAnytzzWD5iescAU+55fOvVSxfcbjfS6TQymQwkSbrY3OfzMa3f71cLUT3sCBcxvCBkDQ/V6/Xgcrl+1RYKBSwWCxSLRbUAX8ybr86tUABerVYLZrP5rDabzaLb7SKXy4lszFeC7W+IBBiPx5hMJlAUBaVSCXq9/kQbj8fRbreRTCZFZuGd0A0EA7DGqVQK6/Uaq9UKsVjsRBuJRFCv1xGNRkX3gm55TQCTyYRKpYJ9jUYjNnQ/tYFAAPl8HsFgUCAA89btRAN0Oh322S0WCwuzL1mWYbPZjlqv14tEIqH6Wji7qwMYDAZ25vF40O/32Xmj0YDRaGTndrsdoVAIDodDOMBSQwBGOBzGfD7HZrP5rr5qQTOEoihPi0UNouJABItG05pgE7EjJu26YDYKhvXeBMtX7GlgsRmX7PYoO+OuM98nwtiDWx+H+3N+0DQNGGMwDOPnTE3T5B7B51UAgiCgbVscx4F935EkCWhEiqJAkiTuJXxcBUAlyzKGYQC9dV3h+/4zlPw4J6ITAFSu62JZFtAjMKqqgtO6vXFQ8TkAqiiKQEu5bRvquoYoitxUzCVGVVUhTdNfP87zHPM8Y5omhGHILUa3yTF1h7o1jiO6roNt21xyfKshoflTt/q+R5ZlxA9chuRWS2ZZFoqiQFmWCIKAzvXUkt1uSh3HQRzHZEygaRqXKb3VlhMrkkZ4ngdd12l5uWz5rcGEWi/L8pckSR+CILz+STRjjL0zxl7+ZTi9Gs/rZ+L5N8AJA23K4ax1AAAAAElFTkSuQmCC'
      },
      {
        name: 'TailwindCSS',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8UlEQVR4Ae2XNZTbQBCG5TBzUl4VZj6+cH8pw0xNqHN10L8w9MVVgSoce+2kCUMVxjbUJSLTb/uXNH4rHYRJ731vRyt5Z3ZIa+OPu/5fNUkrBNMbf5BSVaEwBnqDPhLOxaRh33wtVJ91xQnIJMwrmiHqKw2pSZmacsojQTNoAydJK1jJZwboRWiE/bWxpvKEGatRJQPi4CPIgxxHKX8C7Xh3YM01h97wjeDG7Iq1I2Ju+i80Xc4a1crsA/k0lWSBRVxBhs/y4D6oAsIIjRjo1dXuvR8f5MIZjgT3uiccym/ABP6+L4gJxX2qy5scFmpAbdKUyqu5YAfjvBhsAOkwI4jL8S2Y5OfF2bwhDBkH2iI9IJLoKFgt58Qi8QgjpLfeg/XIiyELrlvYnNUP903gBdjfVQgGgRmUg3qnzPk9gUItRFniGfIQvOT9zWJiB25ns6lN2sDfJWE4EloS9aW8SyiVCZmj7IRUy3QQ0uW4y8akazSAOpRNvXIMsXO63yS+J1aAN1KRRMw9BnO8JJfKe8kOVlteeEQJBVnRA7IjKq1ahoCt4Dxd/YG85NwmMKgahlNfkHClslClmG+KWoCLD/GVKptG2KIFl+egJNgAveSFVnZJaf0cuqcrF76hu8vuLxqRdrUQzscuF4Dqq7axEGghJJ4wnYkhFTmivLKUXWHQLq3JgOoUvUKPBNBT9IRsu8UXb3LRlyyV93oZAb3c9nRRojPAIMqRH539bApNoF8t3Mk4rxeGZLRwBHNx4X7ZrFaziXEu2oA2MM5f5G5eLjKJ7ZT1HWlEmu15Mdt1B+ervYRFf4k0YBjLopwgCa3JTBD17VCxbgQR9weDaokOgVb/AlkhVfzE5mVCCizi5cvp4iccn/IgNMqMMEAqv2pyzqw0IvGlOA4E7SHVIuWPIA4vYtfM/q86H+pGyCPWSMa5FZwkbaCZz/RzYcr8ynNhIuxcaPO+e4dSHGy/038BRbo6lquvOJZ/TWg4avxx1/+rAHVbhJLs9OHAAAAAAElFTkSuQmCC'
      },
      {
        name: 'shadcn',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAZ0lEQVR4Ae3MMREAIQxEUepYQAZGUuElmlLEAEoQgQGay5yAa45tmP31n1cYuzwRiQgzQ+ljjL23qgL13vt/jTr11pq754PS11pzztyAeq31pE49iwignpmZqqL0j9wdqGfyVhi7rAdZJpDQclU3QAAAAABJRU5ErkJggg=='
      }
    ],
    image: 'https://avzx.vercel.app/og.webp',
    demo: 'https://avzx.vercel.app',
    repo: 'https://github.com/JJozef/avzx'
  },
  {
    title: 'SpaceX Launchs',
    icon: <RocketIcon />,
    description:
      'Lazamientos de SpaceX con la integración de Astro View Transitions para una navegación fluida.',
    status: 'desarrollo',
    stack: [
      {
        name: 'Astro',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA3lBMVEX////x8fHPz8/S0tLZ2dkAAADLy8ttbW38/PyysrJERETr6+uYmJh9fX0SEhJBQUEpKSmlpaXh4eE0NDS+vr4aGhqenp5bW1uRkZHn5+ctLS2IiIheXl4MDAy5ubnxtdj1yuP53vfuocfiCZLoabH43Oz78fjzsuPrWtHoNdDuqsThK4XjM47jKpHjJJXjIZrlLKXlIabnLrPpVcT0ztneIW7gMHrkOpnlO6TvntDbIVrleJX22ODpj6zhOILfN3DjWZDaKE/dNV3sprfaQ1LZIT7rrLPooqLUAADZSUlbOaPbAAAA/klEQVR4AWzRAwKFUBRF0Z3dt6v5z/LrhKeVrjKGKE4kJSxbxYTk2aogpMg2Jb4yM1T4qsxQ46szU4OrySwtrlaNLtexx9Uvl94pSLClKu/hoKjD1qncbg+DLZMjcFJ4xnRW8QJwVXzDdFPxDvDIJGITZaL/vFdyYHPIxPokTzZPlV7KjsYTG5VT0S2VVzeMmke67BXjiKZbxuJM0OOB5VOoPBwwEAVQAHy5bRVr20aM/guKvR9zHknGiwISVdMlwxRMw7IdkLieH4RRnCRpmoEkL8rS8/2qquMGRG3XD+U4Xg/I8luapmJpgm61bjdg2e72YDocBbCdTHAs8OMC5fIVlkxQkTEAAAAASUVORK5CYII='
      },
      {
        name: 'TypeScript',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADqUlEQVR4Ae1XA7dkPRC8/+Kz7afPtu21bdu2bdv27rNt27ZubepMes7D7Ky9fU6fZIKuSqeSuTEcxkUajkPdJykvUg6HYR6mKk3HYR64ke5giWmqEhprkvMkH8NwUBUNDAJb6zfBLeCKhK4TmwSKdGc9O5Qrpjc6A3TGJbg7iKUxi0gABGQpqb+ZTgySYCaIaci+aIa4RW7FNLQ4bikBB73FxGYGcDv9AYEHBO5cAjyn13TVNpnrRB/O0nZsw1aQBoGuymWOswZ8c4g7XhvkhlcHurHk74Y4NycDXO3LA1zxykBXfDjGCz/N8McfcwLx/VQ/vDfKC28MbkTWNgEGYYD5R5MQnVEGv4RiBCYWIyipBMHJFmedbX7xxYjJLMO0/QkE5mrRdkkIToXmIae4GhXVdaiqqUdZVR3ySqqx/FQKSdjXAFP4Yj9XnAjOxZXaXt9sPNztLIZtjYY9I/GGW2E7A8OYATfMPJjIVcI1qgAXIguQWVgFsdT8SpyPKGAfM4Jxu+KYORSU1UAsMacCcw4nYvSOWMxSsXziitScfLw1xLoN9kX4lirf1IOf73cBe32yILb2XBqe7nXeOufF/q7otDwMNNM0UV9v4o/ZgXi8xzm8pLbmmd7n8fpgN3yrtMAMX5UIOeElBbBPpVls3fk0PNfnAlxGWPvReYWFAMFpE/fE4fm+F/C6OgHvjPTkONbtiNAegQGXJiBH7pNx3tYtEBKHAnLQcmEwxUlhc7xk+UpuQvsZeFYTaDhm5PYYiNVpEjQ3pZX/FwRzDLVy4wmIeHkUe62JQFxWOcQkG6YqBm2KYizGvLEEZEX8LQADNkRS+aDV1pmglVTU4qtJvnhDCdLpRhEQcAZ9TQvOSc/h3vNCa0hi2JZoipNxb1wG5Ij9rK5eHjmO53knEG++YrVysXG7YvFcX8tc+Si1+0nuZIvAOSGgCep7gKdg9dk0Hkn8NiuAwsMur6xGomyzJMRUWmFc09BPMbC81gywnwHbLwtFQ6usqRMBivF6510gWKYh4CyZjWvJAMXEvWf6YzLLZaViVvFtcs2gPkzeGfI2aPI00x02ssFJBGi3NBTtlX8/zU/+1ThXxihCnvh3fhCPG8bujMUodS90WxWOzyf6mOq6JjgJ13MOseVxqp9NBHe/5H8DV8lU0ym6huAN/z94473Q7wKFRhEyezwh+uzLq0g/Tp0mBxuskI1yGWDa/NjQeqA7CaiNq9tJjxF9CLCAa6xJzpNDjIuEJY0NJaLCJgAAAABJRU5ErkJggg=='
      },
      {
        name: 'TailwindCSS',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8UlEQVR4Ae2XNZTbQBCG5TBzUl4VZj6+cH8pw0xNqHN10L8w9MVVgSoce+2kCUMVxjbUJSLTb/uXNH4rHYRJ731vRyt5Z3ZIa+OPu/5fNUkrBNMbf5BSVaEwBnqDPhLOxaRh33wtVJ91xQnIJMwrmiHqKw2pSZmacsojQTNoAydJK1jJZwboRWiE/bWxpvKEGatRJQPi4CPIgxxHKX8C7Xh3YM01h97wjeDG7Iq1I2Ju+i80Xc4a1crsA/k0lWSBRVxBhs/y4D6oAsIIjRjo1dXuvR8f5MIZjgT3uiccym/ABP6+L4gJxX2qy5scFmpAbdKUyqu5YAfjvBhsAOkwI4jL8S2Y5OfF2bwhDBkH2iI9IJLoKFgt58Qi8QgjpLfeg/XIiyELrlvYnNUP903gBdjfVQgGgRmUg3qnzPk9gUItRFniGfIQvOT9zWJiB25ns6lN2sDfJWE4EloS9aW8SyiVCZmj7IRUy3QQ0uW4y8akazSAOpRNvXIMsXO63yS+J1aAN1KRRMw9BnO8JJfKe8kOVlteeEQJBVnRA7IjKq1ahoCt4Dxd/YG85NwmMKgahlNfkHClslClmG+KWoCLD/GVKptG2KIFl+egJNgAveSFVnZJaf0cuqcrF76hu8vuLxqRdrUQzscuF4Dqq7axEGghJJ4wnYkhFTmivLKUXWHQLq3JgOoUvUKPBNBT9IRsu8UXb3LRlyyV93oZAb3c9nRRojPAIMqRH539bApNoF8t3Mk4rxeGZLRwBHNx4X7ZrFaziXEu2oA2MM5f5G5eLjKJ7ZT1HWlEmu15Mdt1B+ervYRFf4k0YBjLopwgCa3JTBD17VCxbgQR9weDaokOgVb/AlkhVfzE5mVCCizi5cvp4iccn/IgNMqMMEAqv2pyzqw0IvGlOA4E7SHVIuWPIA4vYtfM/q86H+pGyCPWSMa5FZwkbaCZz/RzYcr8ynNhIuxcaPO+e4dSHGy/038BRbo6lquvOJZ/TWg4avxx1/+rAHVbhJLs9OHAAAAAAElFTkSuQmCC'
      },
      {
        name: 'SpaceX API',
        icon: 'https://avatars.githubusercontent.com/u/29695396?s=48&v=4'
      }
    ],
    image: '/projects/spacex-launches.png',
    demo: 'https://spacex-launches-astro.vercel.app',
    repo: 'https://github.com/JJozef/launches-spacex'
  }
]
