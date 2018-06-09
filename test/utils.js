module.exports = function() {

    const makeMock = (item) => {

        const spatulaMock = (_item) => {
            return makeMock(_item);
        };

        spatulaMock.isSpatula = true;

        spatulaMock.getItem = () => item;

        return spatulaMock;
    }

    return {
        mockSpatula: makeMock(),
        defaultDom: () => {
            const parent = {
                type: 'tag',
                name: 'div',
                attribs: {
                    'data-name': 'bowser',
                    class: 'surprise-father'
                },
                children: [],
                next: null,
                prev: null,
                parent: null
            };

            const mario = {
                type: 'tag',
                name: 'div',
                attribs: {
                    'data-name': 'mario',
                    class: 'player player-one'
                },
                children: [],
                prev: null
            };

            const marioText = {
                data: 'Mario',
                type: 'text',
                next: null,
                prev: null
            };

            const luigi = {
                type: 'tag',
                name: 'div',
                attribs: {
                    'data-name': 'luigi',
                    class: 'play player-two'
                },
                children: [],
                next: null
            };

            const luigiText = {
                data: 'Luigi',
                type: 'text',
                next: null,
                prev: null
            };

            marioText.parent = mario;
            luigiText.parent = luigi;
            mario.children.push(marioText);
            luigi.children.push(luigiText);

            mario.parent = parent;
            luigi.parent = parent;
            mario.next = luigi;
            luigi.prev = mario;
            parent.children.push(mario);
            parent.children.push(luigi);

            return parent;
        }
    }
}