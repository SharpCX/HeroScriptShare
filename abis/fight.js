module.exports=[{
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "ClaimedRewards",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "heroIds",
        type: "uint256"
    }],
    name: "CreatedAndSendPrizeHero",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_heroId",
        type: "uint256"
    }],
    name: "CreatedHero",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_heroId",
        type: "uint256"
    }],
    name: "ExpeditedHero",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_attackingHero",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "enemyType",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "rewards",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "xpGained",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "hpLoss",
        type: "uint256"
    }],
    name: "Fight",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "heroId",
        type: "uint256"
    }],
    name: "MovedHeroToBag",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32"
    }],
    name: "RoleAdminChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }],
    name: "RoleGranted",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address"
    }],
    name: "RoleRevoked",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "heroId",
        type: "uint256"
    }],
    name: "TakeHeroFromBag",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "_heroId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "level",
        type: "uint256"
    }],
    name: "UnlockedLevel",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "UpdatedBNBPoolAddress",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "UpdatedBurnAddress",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "characterAddress",
        type: "address"
    }],
    name: "UpdatedCharacterContract",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "percent",
        type: "uint256"
    }],
    name: "UpdatedDividePercent",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "lockTime",
        type: "uint256"
    }],
    name: "UpdatedFirstLockTime",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "UpdatedPriceOracle",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }],
    name: "UpdatedTokenContract",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "player",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint8",
        name: "townType",
        type: "uint8"
    }, {
        indexed: !1,
        internalType: "uint8",
        name: "level",
        type: "uint8"
    }],
    name: "UpgradedTown",
    type: "event"
}, {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "balances",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "bnbhPool",
    outputs: [{
        internalType: "contract IBNBHPool",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "bnbhToken",
    outputs: [{
        internalType: "contract IBEP20",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "burnAddress",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "characters",
    outputs: [{
        internalType: "contract IBNBHCharacter",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "createNewHero",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "dividePercent",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_heroId",
        type: "uint256"
    }],
    name: "expediteHero",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_attackingHero",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "enemyType",
        type: "uint256"
    }],
    name: "fight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "firstLockTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_heroId",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "calcTown",
        type: "bool"
    }],
    name: "getHero",
    outputs: [{
        components: [{
            internalType: "uint256",
            name: "name",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "heroType",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "xp",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "attack",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "armor",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "speed",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "hp",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "arrivalTime",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "level",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "heroClass",
            type: "uint256"
        }],
        internalType: "struct HeroLibrary.Hero",
        name: "",
        type: "tuple"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "bool",
        name: "calcTown",
        type: "bool"
    }],
    name: "getHeroesByOwner",
    outputs: [{
        components: [{
            internalType: "uint256",
            name: "name",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "heroType",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "xp",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "attack",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "armor",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "speed",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "hp",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "arrivalTime",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "level",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "heroClass",
            type: "uint256"
        }],
        internalType: "struct HeroLibrary.Hero[]",
        name: "",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "getHeroesInBag",
    outputs: [{
        components: [{
            internalType: "uint256",
            name: "name",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "heroType",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "xp",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "attack",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "armor",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "speed",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "hp",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "arrivalTime",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "level",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "heroClass",
            type: "uint256"
        }],
        internalType: "struct HeroLibrary.Hero[]",
        name: "",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }],
    name: "getRoleAdmin",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        internalType: "uint8",
        name: "townType",
        type: "uint8"
    }],
    name: "getTownLevel",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "getTownsOfPlayer",
    outputs: [{
        components: [{
            internalType: "uint8",
            name: "level",
            type: "uint8"
        }, {
            internalType: "uint256",
            name: "lastUpgradedTimeStamp",
            type: "uint256"
        }],
        internalType: "struct HeroLibrary.Town[4]",
        name: "",
        type: "tuple[4]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }, {
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }, {
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "hasRole",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "contract IBEP20",
        name: "_bnbhToken",
        type: "address"
    }, {
        internalType: "contract IBNBHCharacter",
        name: "_bnbhCharacter",
        type: "address"
    }, {
        internalType: "contract IBNBHPool",
        name: "_bnbhPool",
        type: "address"
    }, {
        internalType: "contract IPriceOracle",
        name: "_priceOracle",
        type: "address"
    }, {
        internalType: "contract IRandoms",
        name: "_randoms",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "maxHeroCount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "heroId",
        type: "uint256"
    }],
    name: "moveHeroToBag",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "",
        type: "bytes"
    }],
    name: "onERC721Received",
    outputs: [{
        internalType: "bytes4",
        name: "",
        type: "bytes4"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [],
    name: "priceOracle",
    outputs: [{
        internalType: "contract IPriceOracle",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "randoms",
    outputs: [{
        internalType: "contract IRandoms",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }, {
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
    }, {
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "sendPrizeHero",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "tokenAddress",
        type: "address"
    }],
    name: "setBNBHTokenContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "setBNBPoolAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "setBurnAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "characterAddress",
        type: "address"
    }],
    name: "setCharacterContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "percent",
        type: "uint256"
    }],
    name: "setDividePercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "lockTime",
        type: "uint256"
    }],
    name: "setFirstLockTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "heroId",
        type: "uint256"
    }],
    name: "takeHeroFromBag",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_heroId",
        type: "uint256"
    }],
    name: "unLockLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "unLockTime",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "data",
        type: "uint256"
    }],
    name: "unpackFightData",
    outputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }, {
        internalType: "uint24",
        name: "",
        type: "uint24"
    }, {
        internalType: "uint128",
        name: "",
        type: "uint128"
    }],
    stateMutability: "pure",
    type: "function"
}, {
    inputs: [{
        internalType: "uint8",
        name: "townType",
        type: "uint8"
    }],
    name: "upgradeTown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}]