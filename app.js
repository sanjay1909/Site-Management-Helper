


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

       items: [
       {title:"About Us", CL:"http://www.uml.edu/Sustainability/About-Us.aspx", TL:"http://www.uml.edu/CampusRecreation/About-Us/default.aspx" ,GL:"https://docs.google.com/document/d/1VMbwZy3u_9YmcRJlqugZtXeV2_RQnvprh10C10yr15Q/edit?usp=sharing" ,FL:"https://drive.google.com/folderview?id=0By6n6D7KyxUafmpqcDdINXVKc0dJbW9aRDJaZDR4OFl1YXI2bGFLVmNZVzRXbEJsUjVzZTg&usp=sharing" ,items: [
            {title:"Meet the Team", CL:"http://www.uml.edu/Sustainability/Contact-Us.aspx ", TL:"" ,GL:"https://docs.google.com/document/d/1_jBj-_tipEWHQt62ukG18vMPjRFThwSjGDq36g5kEc0/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafm4zUzRzTVRGdFBJYlVBVnlvdkRNbjhKZXMzN0MyZ19COUVHaDFlUkVqT00" ,items: []}
       ]},
       {title:"Planning, Administration & Reporting", CL:"http://www.uml.edu/Sustainability/Climate-Action-Plan/default.aspx", TL:"" , GL:"https://docs.google.com/document/d/1fnclXMFavHj_UjbHpujKMSiYOkiRJZd-Nx0m6Z3ZD9E/edit?usp=sharing",FL:"" ,items: [
            {title:"2020 Committee for Sustainability", CL:"http://www.uml.edu/2020/2020-Commission/Sustainability.aspx", TL:"" ,GL:"https://docs.google.com/document/d/1HY2l1E1cETa9_7IxXbt8QbKmzO_GFZEMU4QFz62Eekg/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafkw4NndNQVZPek40UFNKcDFBMk9pUE5xeFhKdEUxWE0tYjZjZmJXM2tPMTg" ,items: []},
            {title:"AASHE STARS", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1TXmtBgaZdnHQhl2Uw_2h1RuRKo3CRRccxh1Bv_S7JZw/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmN4azAzQmg3UGNHcFpxSldKR252b0Q0QmdMSGpLVlBfclU4UXdZVl9fN00" ,items: []},
            {title:"ACUPCC", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1tHZER1NtJIjo2ZdHaZMnCuqJUHNidUyxco81Y9KmZEE/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafkxQZ2NsWjJkOXllSl9oYkRSZ3BibXB1eEVGM0RPUFNoelFvanlzcUU4S2s" ,items: []},
            {title:"CAP & Interim Reports", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1HZ2EDLU_KDcPa-Pn-Ij-9liycNL4u-hzcydaH4SdeWo/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUaflRveXlZTldtc2VFMEJza3N3WlgtN0s4akNPV1ZrVjJNNWFWOFdKbVB5YzA" ,items: []},
            {title:"CAP Implementation Committees", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/16kf_bdGt-gH12lr00sdmQv6z8Poqj_t6ZV5eXbBrVpg/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafi1TMlB5N1lqV2NOVXI3Y0JlcFNUZXhpd2Q0WUw3WEl6bFAtMlpHSkpBaVE" ,items: [
                {title:"Steering Committee", CL:"", TL:"" , GL:"https://docs.google.com/document/d/1vrulptfjgyHWyhP8J7N87EpzOG54v-LjYdzFA8YLkyE/edit?usp=sharing",FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmxWVUR1aW1FdHotYmR1TUhiZmx5WGF6U3ctY0Zpem5FQ3Z3LUM5UGdPYTA" ,items: []},
                {title:"Academic", CL:"", TL:"" , GL:"https://docs.google.com/document/d/1xqNW162tdA-zGMfG1SaYo4V5rivOtLlTQWp63rhfSUA/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmNrWjdGSjN0aURGSFNnRXpQcmU4Tm1LbG4teExpX2VaejYtOVpOd1pMUms" ,items: []},
                {title:"Administration & Finance", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1Z9umX2Y0BOIRNMD_P42p7yANCMaHvh3oHCmc4jNd3pw/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafnRkVFJBbXhCeDRDM3d2Z0p0RjE2SWdTMXRvWWp5aTZMNWVYLV9rN3dRSlE" ,items: []},
                {title:"Communications", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1C_WfshGRdGlkShDu-HGH4qXRPoP9jcR7XMoTYGYG4t4/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafnJLYkgtWUFSVE1aWS1qc19pTXc3eE4yZ08yTHNTcmV6QVY1T2RDSjY0Ylk" ,items: []},
                {title:"Energy Projects", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1-3Jk1MemSK4V_k0xRXAwwXGQeffo040cKgSB4SLIcWg/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmJhcTRHVHEtR3RLUUxFU2JEQXZBcGhGMHpHTS14ZFpPUGRhb3lSREVaeTg" ,items: []},
                {title:"Student Life", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1c4rPnSvXkTmtXIiQijbgGTytNgxbRNR6bMexYTlZFc4/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafkJmaE1HMVJ6aVpNMnJQZGYzVlY1b3pnNC1tVkxfQUpBMlZjci1KN0NuR2s" ,items: []},
                {title:"Sustainability", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1IiDwN8bMM8rFogSFtWiy8qtgiKo94PHaZxFLkDB52xs/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafk9kQ2pYX2ZrVlV3NWxXclRUelQ0Z1h1QU43RUFlR085dndxamptcUZWclk" ,items: []},
                {title:"Transportation", CL:"https://stage.uml.edu/student-services/Transportation-Services/Sustainable-Transportation/transportation-options-default.aspx", TL:"" ,GL:"https://docs.google.com/document/d/1MS3C2eBif6vdIADT2QzAcVfO1vhaisDX-QpDuEIFdcc/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmFjemU2RVlheHk0cTJkSk0yRGVmZmpZZ2V0QTVnMDRhbnozTW83TElMT0E" ,items: []}
            ]},
       ]},
       {title:"Engagement & Partnerships", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1jttiFWN1UqTjMt-e_cXmJZ_FXs7xmLlizfZxLZZ7dgg/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafnI2aThjSXpyXzEtODRfdGlXU003WmdTVWpub3dnakt3bE5XZDhOX3h3eXc" ,items: [
                {title:"Student Engagement", CL:"http://www.uml.edu/EEM/Environmental-Stewardship/Events/default.aspx", TL:"" ,GL:"https://docs.google.com/document/d/1AUIY1ZHX8rd-pO2Iy9OiGDuAxfa0XLq0Dg-tcB7Hzws/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmtZS2RZRXNTUUhQQ1hZbnFBQ3Y5Y0Y1alJ1TWt6N1E2cG1xb05rYWx0Wnc" ,items: []},
                {title:"Employee Engagement", CL:"http://www.uml.edu/EEM/Environmental-Stewardship/Community-Engagement/default.aspx", TL:"" ,GL:"https://docs.google.com/document/d/1u_lQSRlWk9TXOSeyzq794dMTHRPHsmFrSylj4SlDFTE/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUaflRoOFNtamdvOEYwU3RVR1dUeWYzSi1xajRDQ0ZvUWoyOGhXRXhwaFoteFU" ,items: []},
                {title:"Partnerships ", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1lLUZKkWOILkhT4y7AVC2fbeCJaff70HW6BuVkTcjeAc/edit?usp=sharings", FL:"https://drive.google.com/open?id=0By6n6D7KyxUaflA2T3ZGRVNPVXFkQmsxZ05HTXFjSVRoVE00YWV2OXJGZU9jbEZpLVpCTkU" ,items: []}
        ]},
        {title:"Academics & Research", CL:"http://www.uml.edu/Sustainability/Academic-reasearch.aspx", TL:"" ,GL:"https://docs.google.com/document/d/1aOuL8v5XIPWjWBVDJMWHX2XwCWoNxPv_dlhtdMhn0TA/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUaflp4YjZiTzVTVlUtNWIxVnVndmFoQ1h6M2FNUXo3a3NFUWZLTVJFRlhxbzA" ,items: [
                {title:"Academic Programs", CL:"http://www.uml.edu/Research/Climate-Change/Academic-Programs.aspx", TL:"" ,GL:"https://docs.google.com/document/d/1mV-lVJ4D9y2sHYxVdvbsT_B_OIffF8DRiB6dgjwuTlM/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafkZ5SjJqM3YwaTJEdVlKYmZDMGpMOVdzOVdoaVl3TFJOdV81T2FYbERxT2c" ,items: []},
                {title:"Campus as a Living Laboratory", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1mFN6Lsq9gdTExDceaPovHXRQ4hs3bsz3AH1hPTKO3YU/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafm81b1JCMHpNV0JKVlVTXzlRNFRNWk1rWVlKaGE4ay0xeWI1SllDOWRYRXM" ,items: []},
                {title:"Climate Change Initiative", CL:"http://www.uml.edu/Research/Climate-Change/default.aspx", TL:"" ,GL:"https://docs.google.com/document/d/15jf9Bf45y6Nfejwsv5HzK6tm70pGmt2NiDW1Nujo9nQ/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmxCdVlxSWxkb3ZET3RYSFdxbkNoRHdWY1o1UUE1bUNEOVNtOVFqcVJEdXM" ,items: []},
                {title:"Courses", CL:"http://www.uml.edu/Research/Climate-Change/Academic-Programs.aspx", TL:"" ,GL:"https://docs.google.com/document/d/162GahIxsgJvpOYOMbYLPWsa_UKsxLqfwS-bmVgQRWgs/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafjFCVnUxT0NuSTBKZEVPMUtTS3ljUjZtR2NiMWNIMUZsM04wR0piS2ZJdVU" ,items: []},
                {title:"Research", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1mlaR4fK91pkYE5JhtUtqAvAqpGxqlJhVQfkmM4bMAR0/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafjJ6YTRoUWEwQmlyUUpPTHgtZFM4X0hZU1Z2V1ZSdVVPVW1uaW9RTjlFZUU" ,items: []}
        ]},
        {title:"Campus Operations", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1tFybaI--xoC37zlcYzyfiqexFAw4Q2_4EYQTym9nJ84/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafmg5cy1CVVltaVA2VllSaHJkaVQyQUl2a3J3UnlqbWFoMVlBYXZGZ3VfY0E" ,items: [
                {title:"Air and Climate", CL:"", TL:"" , GL:"https://docs.google.com/document/d/1Faecfjz5qTVchI2aPxsO9bzNv5roFcetlcoyYexJjOk/edit?usp=sharing",FL:"https://drive.google.com/open?id=0By6n6D7KyxUafm5xY0JIUXhnSGNOZmdDRHRTSU85TG9yenNhS3V1RXNiaUdhRXhCZE8yZms" ,items: []},
                {title:"Buildings", CL:"", TL:"", GL:"https://docs.google.com/document/d/1h4B84zNDZC1UhbvTr35Wqmi83HuJOHLVPq0ZBEYdZ6U/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUaflNMV2V4cFZKV2xqcUcxOVhFN05jS1pfNmdneXlFMmdQa09DdjlabXZ3WG8" ,items: []},
                {title:"Dining Services", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1nyVRWDjhnzlE-BmJMjPnh7GWP-00R198sH07JY9C-kg/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafjVXUzc0ald2azZDTU1yR1RlMHZMLXhENDFOVk10Y1FuZXNZSUNCZjlYMmM" ,items: []},
                {title:"Energy", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1TSAKc7ruW9cpih2qF-s8kjRLmCpNEDftM6R8JhcuWCw/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUaflNSTS1FLWVlaXQwVU9sWVcwVy1FTVk4bWlJaGQ2dk9odlE3RU1VeFo5OFk" ,items: []},
                {title:"Grounds", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1Cm_xPGBIW1_2KNOz6QVf35cia3gvuchCor9fwX3Bw3c/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafnZGNkl2MHdUamVwVHBmaHdlUHNYWUhMVm45bmFMc2pFbThxbk5YR05yT00" ,items: []},
                {title:"Purchasing", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1MfESlog0NsGiu3lg0Lb5XW_FojE0Qc0OTT61DMrGQ6Q/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafkZqbFIyTlVPUlZmU2VNN2M3NFNoVW1ScjQ5RUhBMFd1eDFDVy1uVXpXNUU" ,items: []},
                {title:"Transportation", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1mkri3g_Vfo02tg9mq9MVGFxo_DV18apC1fYZXMElIjo/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafjQzT2JpdUp6RDJJVDFVVnR1UGVZbUpxbTYzZmN0VWM1TUdnUXRGUWszaUk" ,items: []},
                {title:"Waste", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1SkGTlZbReMc3piRf8o0aZyu8gMLFDYueb3N_a7qLj-U/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafjRJQmFyR2R2aElIOU15WmUzeHV6cXBIRTNIZkIyakxwd0dHUXdweVU1Tmc" ,items: []},
                {title:"Water", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1Tbjkfae00rLQtoSAP483S9xgCgrdVFPY2h_MU5z-RZ0/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafnkxUjh0NUllZ09rVEVYR0FqdWt2ZnpMOGFHUm5BYmJLZ0JxVk9wcjI3RUk" ,items: []}
        ]},
        {title:"News & Events", CL:"", TL:"" ,GL:"https://docs.google.com/document/d/1I9hFZBZUQLwtGM4bVqfGzdd55JMOW0hTE2lD3fKjnd4/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafm9oWWF3NzdkeWNyX1VzTUNnaWdpM3ZabkZPNzhGVV9VNTNtUnBmMzdPZzg" ,items: []},
        {title:"Awards & Recognitions", CL:"http://www.uml.edu/Sustainability/Recognition.aspx", TL:"" ,GL:"https://docs.google.com/document/d/19mzUS-ps8d4n5kLErLUK3Eqqkrjyr8SUw-43jhQSv-0/edit?usp=sharing", FL:"https://drive.google.com/open?id=0By6n6D7KyxUafkJnbGdpN0htbDF6eWthazd1N2ttLTExTWxYeS1Zb2RVTER4aUhxNG15NVk" ,items: []}

       ]
     }
  },

  componentWillMount: function(){
    this.setState({items: this.state.items})
  },
  render: function(){
    return (
      React.createElement(Navigation, {items: this.state.items})

    );
  }
});

React.render(React.createElement(Menu, null), document.getElementById('reactApp'));
