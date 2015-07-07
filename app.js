


var SectionLink = React.createClass({displayName: "SectionLink",
    render: function(){
    var contentLink;
    var templateLink;
    if(this.props.contentLink.length == 0){
        contentLink = " [Create New Page] ";
    }
    else{
        contentLink = React.createElement("a", {href: this.props.contentLink, target: "_blank"}, " [Current URL] ");
    }
    if(this.props.templateLink.length == 0){
        templateLink = "";
    }
    else{
        templateLink = React.createElement("a", {href: this.props.templateLink, target: "_blank"}, " [Template URL] ");
    }
        return (
        React.createElement("div", null, React.createElement("b", null, React.createElement("i", null, this.props.title)),
                React.createElement("a", {href: this.props.instructions, target: "_blank"}, "[Instructions & Contents] "),
                React.createElement("a", {href: this.props.filesLink, target: "_blank"}, "[Files] ")
            )
        )
    }
});

var Navigation = React.createClass({displayName: "Navigation",

    render: function(){
        return(
        React.createElement("ul", null,

                this.props.items.map(function(item) {
                    if(item.items.length == 0)
                        return React.createElement("li", null, React.createElement(SectionLink, {title: item.title, contentLink: item.CL, instructions: item.GL, filesLink: item.FL, templateLink: item.TL}))
                    else
                        return (
                        React.createElement("li", null, React.createElement(SectionLink, {title: item.title, contentLink: item.CL, instructions: item.GL, filesLink: item.FL, templateLink: item.TL}),
                        React.createElement(Navigation, {items: item.items})
                        )
                        )
                })

        )
        )
    }

});

var Menu = React.createClass({displayName: "Menu",
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
          React.createElement(Navigation, {items: this.state.items})

        );
    }
});

React.render(React.createElement(Menu, null), document.getElementById('reactApp'));
