"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var cheerio_1 = __importDefault(require("cheerio"));
var connection_1 = __importDefault(require("./middlewares/connection"));
var characterNames = [
    "Abraxos",
    "Aedion_Ashryver",
    "Aelin_Galathynius",
    "Anneith",
    "Ansel_of_Briarcliff",
    "Asterin_Blackbeak",
    "Blackbeak_Matron",
    "Borte",
    "Briar_Blackbeak",
    "Bronwen_Vanora",
    "Cadre",
    "Cairn",
    "Chaol_Westfall",
    "Connall",
    "Cresseida_Blueblood",
    "Crochan_Witches",
    "Cyrene",
    "Deanna",
    "Dorian_Havilliard",
    "Dorian_Havilliard_I",
    "Dresenda",
    "Duke_Perrington",
    "Edda_Blackbeak",
    "Elena_Galathynius_Havilliard",
    "Elgan",
    "Elide_Lochan",
    "Endymion_Whitethorn",
    "Erawan",
    "Essar",
    "Evangeline",
    "Fae",
    "Faline_Blackbeak",
    "Falkan_Ennar",
    "Fallon_Blackbeak",
    "Farasha",
    "Farnor",
    "Fendir",
    "Fenrys_Moonbeam",
    "Fleetfoot",
    "Galan_Ashryver",
    "Gavriel",
    "Ghislaine_Blackbeak",
    "Glennis_Crochan",
    "Hasar",
    "Hellas",
    "Human",
    "Ilias",
    "Ilken",
    "Imogen_Blackbeak",
    "Kaltain_Rompier",
    "Kaya_Blackbeak",
    "Keva",
    "Kharankui",
    "Kyllian",
    "Lady_of_the_Great_Deep",
    "Linnea_Blackbeak",
    "Lorcan_Salvaterre",
    "Lord_Westfall",
    "Lumas",
    "Lysandra",
    "Maeve",
    "Mala_Fire-Bringer",
    "Manon_Blackbeak",
    "Murtaugh_Allsbrook",
    "Nesryn_Faliq",
    "Ren_Allsbrook",
    "Rolfe",
    "Rowan_Whitethorn",
    "Ruk",
    "Sartaq",
    "Sellene_Whitethorn",
    "Sorrel_Blackbeak",
    "Temis",
    "The_Bane",
    "The_Lord_of_the_North",
    "The_Silent_Assassins",
    "The_Thirteen",
    "Thea_Blackbeak",
    "Three-Faced_Goddess",
    "Vernon_Lochan",
    "Vesta_Blackbeak",
    "Weylan_Darrow",
    "Yellowlegs_Matron",
    "Yeran",
    "Yrene_Westfall",
];
var getCharacterPageNames = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, $, categories, characterPageNames, i, ul, characterLIs, j, li, name_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get("Category:Kingdom_of_Ash_characters")];
            case 1:
                data = (_a.sent()).data;
                $ = cheerio_1.default.load(data);
                categories = $("ul.category-page__members-for-char");
                characterPageNames = [];
                for (i = 0; i < categories.length; i++) {
                    ul = categories[i];
                    characterLIs = $(ul).find("li.category-page__member");
                    for (j = 0; j < characterLIs.length; j++) {
                        li = characterLIs[j];
                        name_1 = $(li).find("a.category-page__member-link").attr("href");
                        characterPageNames.push(name_1);
                    }
                }
                return [2 /*return*/, characterPageNames];
        }
    });
}); };
var getCharacterInfo = function (characterName) { return __awaiter(void 0, void 0, void 0, function () {
    var data, $, name, species, image, parts, last, characterInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get("https://throneofglass.fandom.com/wiki/".concat(characterName))];
            case 1:
                data = (_a.sent()).data;
                $ = cheerio_1.default.load(data);
                name = $('div[data-source="full name"] > div.pi-data-value.pi-font').text();
                species = $('div[data-source="species"] > div.pi-data-value.pi-font').text();
                image = $(".image.image-thumbnail > img").attr("src");
                if (!name) {
                    parts = characterName.split("/");
                    last = parts[parts.length - 1];
                    name = last.replace("_", " ");
                }
                characterInfo = {
                    name: name,
                    species: species,
                    image: image,
                };
                return [2 /*return*/, characterInfo];
        }
    });
}); };
var loadCharacters = function () { return __awaiter(void 0, void 0, void 0, function () {
    var characterInfoPromises, characters, values, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                characterInfoPromises = characterNames.map(function (characterName) {
                    return getCharacterInfo(characterName);
                });
                return [4 /*yield*/, Promise.all(characterInfoPromises)];
            case 1:
                characters = _a.sent();
                console.log("Let's seed it");
                values = characters.map(function (character, i) { return [
                    i,
                    character.name,
                    character.species,
                    character.image,
                ]; });
                console.log(values);
                sql = "INSERT INTO Characters (id, name, species, image) VALUES ?";
                connection_1.default.query(sql, [values], function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("YAYY");
                });
                return [2 /*return*/];
        }
    });
}); };
loadCharacters();
//# sourceMappingURL=seed.js.map