export function fetchReleaseTag() {
    const tagLineParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline')
    const docsReleaseTagSpan = document.createElement('samp')
    docsReleaseTagSpan.classList.add('docs-cn-github-release-tag')
    docsReleaseTagSpan.innerText = 'v1.0.1'
    tagLineParagragh?.appendChild(docsReleaseTagSpan)
}
