import chai from 'chai';
import fs from 'fs';
import {getJSONMap} from 'lib/converter';

chai.should();

describe('converter', () => {
  it('should convert map correctly', () => {
    var map = getJSONMap('./test/ambili.map');
    console.log(map);
    map.should.equal({"abc":"def"})
  });
});
