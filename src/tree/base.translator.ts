import { BaseTree } from '@xon/ast';

export abstract class BaseTranslator {
    static scopes = [];

    get scopes() {
        return BaseTranslator.scopes;
    }
    get currentSope() {
        return BaseTranslator.scopes[BaseTranslator.scopes.length - 1];
    }

    tree: BaseTree;

    abstract translate();
}
