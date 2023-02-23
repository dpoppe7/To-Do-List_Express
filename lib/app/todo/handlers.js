function renderList (req, res){
    res.redirect(303, req.baseUrl + '/list');
}

function getList (req, res) {
    if (!req.session.items) {
      req.session.items = [];
    }
    res.render('todo.hbs', {
      items: req.session.items
    });
}

module.exports = { 
    renderList, 
    getList  
};