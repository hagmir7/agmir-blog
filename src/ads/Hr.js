
const ads = `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6043226569102012"
            crossorigin="anonymous"></script>
        <!-- H-content-ads -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-6043226569102012"
            data-ad-slot="4567237334"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>

`


function Hr(){
    return(
         <div dangerouslySetInnerHTML={{ __html: ads }} />
    )
}

export default Hr;