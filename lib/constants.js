const ES = 'es2015';
const VUE = 'vue';
const REACT = 'react';

const CONFIG = {
    // 项目名称
    PROJECT_NAME: 'projectName',

    // 项目描述
    PROJECT_DESC: 'projectDesc',

    // Front frame
    FE_FRAME: 'feFrame',

    // CSS Preprocessor
    CSS_PREPROCESSOR: 'cssPreprocessor',

    // Install dependencies
    INSTALL_DEP: 'installDep',
};

const TEMPLATES = {
    // React 
    [REACT]: 'github:https://github.com:ShuyunFF2E/react-project#master',

    // Vue
    [VUE]: 'github:https://github.com:ShuyunFF2E/vue-project#master',

    // Do not use front frame
    [ES]: 'github:https://github.com:ShuyunFF2E/es2015-project#master',
}

module.exports = {
    ES,
    VUE,
    REACT,
    CONFIG,
    TEMPLATES
};