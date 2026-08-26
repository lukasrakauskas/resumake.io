// @ts-check

/** @type {import('next').NextConfig} **/
const NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  async rewrites() {
    return [
      {
        source: '/api/texlive/pdftex/10/swiftlatexpdftex.fmt',
        destination:
          'https://texlive.texlyre.org/pdftex/10/swiftlatexpdftex.fmt'
      },
      {
        source: '/api/texlive/pdftex/10/:path*',
        destination: 'https://texlive.texlyre.org/pdftex/26/:path*'
      },
      {
        source: '/api/texlive/pdftex/:path*',
        destination: 'https://texlive.texlyre.org/pdftex/:path*'
      },
      {
        source: '/api/texlive/xetex/10/swiftlatexxetex.fmt',
        destination: 'https://texlive.texlyre.org/xetex/10/swiftlatexxetex.fmt'
      },
      {
        source: '/api/texlive/xetex/10/:path*',
        destination: 'https://texlive.texlyre.org/xetex/26/:path*'
      },
      {
        source: '/api/texlive/xetex/:path*',
        destination: 'https://texlive.texlyre.org/xetex/:path*'
      }
    ]
  }
}

module.exports = NextConfig
