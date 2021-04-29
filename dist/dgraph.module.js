"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DgraphModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DgraphModule = void 0;
const common_1 = require("@nestjs/common");
const dgraph_core_module_1 = require("./dgraph-core.module");
let DgraphModule = DgraphModule_1 = class DgraphModule {
    static forRoot(options) {
        return {
            module: DgraphModule_1,
            imports: [dgraph_core_module_1.DgraphCoreModule.forRoot(options)],
        };
    }
};
DgraphModule = DgraphModule_1 = __decorate([
    common_1.Module({})
], DgraphModule);
exports.DgraphModule = DgraphModule;