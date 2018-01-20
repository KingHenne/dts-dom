import {ContextFlags, TopLevelDeclaration, create, emit} from "../index"

describe("an emitted module with triple slash directives", () => {
    it("matches the snapshot", () => {
        const declarations: TopLevelDeclaration[] = [];

        declarations.push(create.tripleSlashReferencePathDirective("./test"));
        declarations.push(create.tripleSlashReferenceTypesDirective("test"));
        declarations.push(create.tripleSlashReferenceNoDefaultLibDirective());
        declarations.push(create.tripleSlashAmdModuleDirective());
        declarations.push(create.tripleSlashAmdModuleDirective("test"));
        declarations.push(create.module("test"));

        expect(emit(declarations, ContextFlags.Module)).toMatchSnapshot();
    });
});

describe("an emitted module without triple slash directives", () => {
    it("matches the snapshot", () => {
        const module = create.module("test");

        expect(emit(module, ContextFlags.Module)).toMatchSnapshot();
    });
});
