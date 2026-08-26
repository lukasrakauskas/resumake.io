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
        source: '/api/texlive/pdftex/:path*',
        destination: 'https://texlive2.swiftlatex.com/pdftex/:path*'
      },
      {
        source: '/api/texlive/xetex/:path*',
        destination: 'https://texlive2.swiftlatex.com/xetex/:path*'
      }
    ]
  }
}

module.exports = NextConfig
