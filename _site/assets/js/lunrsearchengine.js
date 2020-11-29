
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Dechen Chuteng Designs | @by. dpc.   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Dechen Chuteng",
    "body": "                                                                                               Infographic for Sacramento State              :       August 2020:                                                                               Dechen                 22 Nov 2020                                                                                                                           Logo design for a non-profit organization              :       October 2019:                                                                               Dechen                 20 Nov 2020                                                                                                                           Bliss - Side Project              :       May 2016:                                                                               Dechen                 19 Nov 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/ecs-infographic/",
    "title": "Infographic for Sacramento State",
    "body": "2020/11/22 - August 2020IntroductionSacramento State’s College of Engineering and Computer Science(ECS) department was bringing major changes to their resources for students starting Fall 2020 Semester. I am currently their student Graphic Design Assistant and helped the team create an infographic to inform students. This infographic is featured on this page. ProcessI was given a document which listed all the major changes to the resources. I then consulted with my supervisor about the graphic specs such as color schemes and dimension of the graphic. After a few meetings with my team and supervisors, I created this infographic, adhering the color schemes to match Sacramento State’s original color of green and gold. I also created a subtle honey-comb like texture for the background of the header as the mascot of the university is a hornet. I made use of simple logos to make the infographic eye catching as well as readable. Tools Adobe IllustratorFull render of the infographic: "
    }, {
    "id": 7,
    "url": "http://localhost:4000/nyamdudro-project/",
    "title": "Logo design for a non-profit organization",
    "body": "2020/11/20 - October 2019IntroductionLast year, my best friend asked me if I could design a logo for an upcoming project her and her colleague were working on. I happily said of course! The logo was created for a non-profit organization based in the San Francisco Bay Area called Nyamdu Dro Mentorship. Here’s a little snippet about Nyamdu Dro Mentorship:  In Tibetan, “nyamdu dro” translates to “go together,” a literal representation of our belief in the power of community and collaboration. We are a platform for Tibetan youth in the Bay Area to create meaningful professional relationships. ProcessMy friend and I exchanged a couple of texts about the logo design and she wanted the logo to include two tibetan youths and somehow incorporate the beauty of Tibetan culture as well. I then went online and google searched many images of young Tibetan youths in their traditional attire and I found a couple of them which caught my eye. I also searched for Tibetan prayer flags and did my research to make sure that the pictures I found were authentic and not disrespectful of the Tibetan culture. I grabbed my pen and paper and started sketching for the logo design. Here is what I came up with:  After I was satisfied with the sketch, I scanned the image over to Adobe Illustrator and then started tracing the main components. I created appropriate layers and named them accordingly. As a designer, I find that names are so crucial to any design piece that you are making. For the logo, I played around with bright colors to make it fun and interactive. The logo includes two Tibetan youths holding hands together to symbolize the meaning behind the organization. The background of the logo has the beautiful Himalayan mountains which surrounds Tibet. Adding in the prayer flags was the last finishing touch to the logo. My friend and her colleague were really happy with the end results. Here is a picture of me hanging out with the Nyamdu Dro Mentorship crew and my logo being displayed on their banner.   Tools Adobe Illustrator"
    }, {
    "id": 8,
    "url": "http://localhost:4000/high-school-project/",
    "title": "Bliss - Side Project",
    "body": "2020/11/19 - May 2016IntroductionThis was a fun project I did during my last year of high school. I took a Graphic Design course and I wanted to explore around with a pastel color palette and typography. ProcessI made this fun text graphic along with a repitition pattern of t-shirts. Tools Adobe Illustrator Adobe Photoshop"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});