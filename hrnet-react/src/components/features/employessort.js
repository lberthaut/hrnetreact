/*Sort function, for the employee array. Sort alphabeticalelly, and by date*/
export default function ArraySort() {
  const compare = function (ids, asc) {
    return function (row1, row2) {
      const tdValue = function (row, ids) {
        return row.children[ids].textContent;
      }
      const tri = function (v1, v2) {
        if (!isNaN(Date.parse(v1)) && !isNaN(Date.parse(v2))) {
          return Date.parse(v1) - Date.parse(v2)
        }
        else if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
          return v1 - v2;
        }
        else {
          return v1.toString().localeCompare(v2);
        }
      };
      return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
    }
  }

  const tbody = document.querySelector('tbody');
  const thx = document.querySelectorAll('th');
  const trxb = tbody.querySelectorAll('tr');
  thx.forEach(function (th) {
    th.addEventListener('click', function () {
      let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
      classe.forEach(function (tr) {
        tbody.appendChild(tr)
      });
    })
  });
}