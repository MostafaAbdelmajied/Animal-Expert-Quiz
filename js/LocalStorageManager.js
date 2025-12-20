export function getStringKey(key)
{
    return localStorage.getItem(key);
}

export function getAll(key)
{
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch(e) {
        return [];
    }
}

export function findById(id, key)
{
    let data = getAll(key);
    let item = data.find(item => item.id == id);
    return item || null;
}

export function getByAttribute(attribute, value, key)
{
    let data = getAll(key);
    let item = data.find(item => item[attribute] == value);
    return item || null;
}

export function store(key, data)
{
    localStorage.setItem(key, JSON.stringify(data));
}

export function saveItem(data, key)
{
    let keyData = getAll(key);
    keyData.push(data);
    store(key, keyData);
}

export function update(id, data, key)
{
    let keyData = getAll(key);
    let itemIndex = keyData.findIndex(item => item.id == id);
    if(itemIndex == -1) return false;
    keyData[itemIndex] = data;
    store(key, keyData);
    return true;
}

export function deleteKey(key)
{
    localStorage.removeItem(key);
}

export function deleteItem(id, key) {
    let keyData = getAll(key);
    let newData = keyData.filter(item => item.id != id);
    store(key, newData);
}

export function findExam(id,examId, key)
{
    let data = getAll(key);
    let item = data.find(item => {
        return item.stdId == id && item.examId== examId;
    });
    return item || null;
}