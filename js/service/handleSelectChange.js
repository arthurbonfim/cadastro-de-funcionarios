const handleSelectChange = (selectId, selectClass ) => {
    return function() {
        if(this.checked){
            [...selectClass].forEach(sec => sec.style.display = 'none');
            selectId.style.display = 'block';
        }
    }
}

export default handleSelectChange;