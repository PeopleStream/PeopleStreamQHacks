var wikipedia = require("node-wikipedia");


module.exports = {
  getVcard: function(search, cb) {
    wikipedia.page.data(search, { content: true }, function(response) {
    	// structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
      let text = JSON.stringify(response);
      let vcard_index = text.indexOf('<table class=\\"infobox vcard\\"');
      text = text.slice(vcard_index);
      vcard_index = text.indexOf('</table>');
      text = text.slice(0,vcard_index+8);
      cb(text);
    });
  },
  getBookID: function(search, cb) {
    this.getVcard(search,(text) => {
      let oclc   = text.indexOf('www.worldcat.org/oclc/'),
          isbn   = text.indexOf('Special:BookSources/'),
          deweyD = text.indexOf('Dewey Decimal</a>');

      if (oclc > -1){
        oclc = text.slice(oclc,oclc+50);
        oclc = oclc.split('>')[1];
        oclc = oclc.split('<')[0];
      }
      if (isbn > -1){
        isbn = text.slice(isbn,isbn+100);
        isbn = isbn.split('>')[1];
        isbn = isbn.split('<')[0];
      }
      if (deweyD > -1) {
        deweyD = text.slice(deweyD,deweyD+50);
        deweyD = deweyD.split('<td>')[1];
        deweyD = deweyD.split('<')[0];
      }

      cb(isbn, oclc, deweyD);
    });
  },

}


//https://en.wikipedia.org/wiki/Special:BookSources/0-312-93208-1
