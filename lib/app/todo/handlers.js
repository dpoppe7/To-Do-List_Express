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

function addList (req, res) {
    if (!req.session.items) {
      req.session.items = [];
    }
    let items = req.session.items;
    let item = req.body.item;
    items.push({ name: item });

    res.redirect(303, req.baseUrl + '/list');
}
  
function saveList (req, res) {
    if (!req.session.items) {
        req.session.items = [];
    }
    for (let i = 0; i < req.session.items.length; i++) {
        if (req.body['item' + i]) {
            req.session.items[i].done = (req.body['item' + i] === 'done');
        } else {
            req.session.items[i].done = false;
        }
    }
    res.redirect(303, req.baseUrl + '/list');
}
  
function removeList (req, res) {
    if (!req.session.items) {
        req.session.items = [];
    }
    for (let key in req.body) {
        if (Object.prototype.hasOwnProperty.call(req.body, key) && key.startsWith('item')) {
            const num = parseInt(key.replace('item', ''), 10);
            if (req.body[key] === 'done') {
                req.session.items.splice(num, 1);
            }
        }
    }
    res.redirect(303, req.baseUrl + '/list');
}

module.exports = { 
    renderList, 
    getList,
    addList,
    saveList,
    removeList  
};