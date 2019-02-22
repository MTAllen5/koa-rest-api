// store labels as database:

var id = 0;

function nextId() {
    id++;
    return 'l' + id;
}

function Label(name, total) {
    this.id = nextId();
    this.Name = name;
    this.Total = total;
}

var labels = [
    new Label('你好', 4),
    new Label('你信', 2),
    new Label('唯品范儿', 5),
    new Label('唯品会公益', 3)
];

module.exports = {
    getLabels: () => {
        return labels;
    },

    getLabel: (id) => {
        var i;
        for (i = 0; i < labels.length; i++) {
            if (labels[i].id === id) {
                return labels[i];
            }
        }
        return null;
    },

    createLabel: (name, total) => {
        var l = new Lable(name, total);
        labels.push(l);
        return l;
    },

    deleteLabel: (id) => {
        var
            index = -1,
            i;
        for (i = 0; i < labels.length; i++) {
            if (labels[i].id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            // remove products[index]:
            return labels.splice(index, 1)[0];
        }
        return null;
    }
};
