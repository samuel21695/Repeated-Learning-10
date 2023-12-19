function Pokemon(name, type) {
  let privateName = name;
  let privateType = typs;
  
  return {
    getName: function() {
      return privateName;
    },
    getType: function() {
      return privateType;
    },
    setType: function(newType) {
      privateType = newType;
    }
  };
}
