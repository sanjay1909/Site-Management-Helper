


var SectionLink = React.createClass({
    render: function(){
    var contentLink;
    var templateLink;
    if(this.props.contentLink.length == 0){
        contentLink = " [Create New Page] ";
    }
    else{
        contentLink = <a href={this.props.contentLink} target="_blank"> [Current URL] </a>;
    }
    if(this.props.templateLink.length == 0){
        templateLink = "";
    }
    else{
        templateLink = <a href={this.props.templateLink} target="_blank"> [Template URL] </a>;
    }
        return (
        <div><b><i>{this.props.title}</i></b>
                <a href={this.props.instructions} target="_blank">[Instructions & Contents] </a>
                <a href={this.props.filesLink} target="_blank">[Files] </a>
            </div>
        )
    }
});

var Navigation = React.createClass({

    render: function(){
        return(
        <ul>
            {
                this.props.items.map(function(item) {
                    if(item.items.length == 0)
                        return <li><SectionLink  title={item.title} contentLink={item.CL} instructions={item.GL} filesLink={item.FL} templateLink={item.TL}/></li>
                    else
                        return (
                        <li><SectionLink  title={item.title} contentLink={item.CL} instructions={item.GL} filesLink={item.FL} templateLink={item.TL}/>
                        <Navigation items={item.items}/>
                        </li>
                        )
                })
            }
        </ul>
        )
    }

});

var Menu = React.createClass({
    getInitialState: function(){
         return {
           items: []
         }
    },
    jsonRequest: function (jsonURL,callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', jsonURL, true); //
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    },
    loadJSON: function (jsonURL) {
        this.jsonRequest(jsonURL,function (response) {
            var actual_JSON = JSON.parse(response);
            this.setState({items: actual_JSON.items})
        }.bind(this));
    },

    componentDidMount: function() {
        this.loadJSON('sustainability.json');
    },

    render: function(){
        return (
          <Navigation items={this.state.items}/>

        );
    }
});

React.render(<Menu/>, document.getElementById('reactApp'));
