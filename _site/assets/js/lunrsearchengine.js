
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
    "body": "                                                                                               Created an infographic for Sacramento State's ECS Department              :       August 2019:                                                                               Dechen                 22 Nov 2020                                                                                                                           Logo design for a non-profit organization              :       October 2019I helped create a logo for a non-profit organization based in San Francisco Bay Area. The organization is called Nyamdudro Mentorship program. :                                                                               Dechen                 20 Nov 2020                                                                                                                           Bliss - Side Project              :       May 2016:                                                                               Dechen                 19 Nov 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/ecs-infographic/",
    "title": "Created an infographic for Sacramento State's ECS Department",
    "body": "2020/11/22 - August 2019 I assisted Sac State’s ECS Department in creating an infographic to inform students about Fall 2020 changes. Here is the link to the website which shows the infographic. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/nyamdudro-project/",
    "title": "Logo design for a non-profit organization",
    "body": "2020/11/20 - October 2019I helped create a logo for a non-profit organization based in San Francisco Bay Area. The organization is called Nyamdudro Mentorship program. Here is a snippet about who they are:  In Tibetan, “nyamdu dro” translates to “go together,” a literal representation of our belief in the power of community and collaboration. We are a platform for Tibetan youth in the Bay Area to create meaningful professional relationships. To create this logo, I first sketched out the drawing with pen and paper. I then scanned the picture of the drawing and uploaded it on Adobe Illustrator.  I played around with bright colors to make it fun and interactive. The logo includes two Tibetan youths holding hands together. The background includes mountains which represents the Himalaya mountains. There is also a Tibetan prayer flag. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/high-school-project/",
    "title": "Bliss - Side Project",
    "body": "2020/11/19 - May 2016 This was a project I did during my last year of high school. I took a Graphic Design course and I wanted to explore around with a pastel color palette and typography. I made this fun text graphic along with a repitition pattern of t-shirts. "
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