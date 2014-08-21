
exports.APPLY = function(cb,args,that){cb.apply(that,args);};

exports.NOOP = function(){};

exports.FALSE = function(){ return false; };
exports.TRUE = function(){ return true; };

exports.STOP = function(e){ e.stopPropagation(); }
exports.PREVENT = function(e){ e.preventDefault(); }

exports.ERROR = function(e){ throw e; };
