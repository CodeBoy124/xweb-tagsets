module.exports = [
    {
        from: "end",
        to() {
            return `<?php } ?>`;
        }
    },
    {
        from: "foreach",
        to(loop) {
            return `<?php foreach(${loop}){ ?>`;
        }
    },
    {
        from: "if",
        to(condition) {
            return `<?php if(${condition}){ ?>`;
        }
    },
    {
        from: "elif",
        to(condition) {
            return `<?php }elseif(${condition}){ ?>`;
        }
    },
    {
        from: "elseif",
        to(condition) {
            return `<?php }elseif(${condition}){ ?>`;
        }
    },
    {
        from: "else",
        to() {
            return `<?php }else{ ?>`;
        }
    },
    {
        from: "for",
        to(loop) {
            return `<?php for(${loop}){ ?>`;
        }
    },
    {
        from: "while",
        to(condition) {
            return `<?php while(${condition}){ ?>`;
        }
    },
    {
        from: "include",
        to(args) {
            return `<?php include ${args}; ?>`;
        }
    },
    {
        from: "require",
        to(args) {
            return `<?php require ${args}; ?>`;
        }
    },
    {
        from: "namespace",
        to(args) {
            return `<?php namespace ${args}; ?>`;
        }
    }
];
