(function() {
    // variables
    var d = document;
    var h = d.head;
    var b = d.body;

    // clear body
    var title = document.title;

    h.innerHTML = '';
    b.innerHTML = '';
    document.title = title;

    // set body background
    b.style.backgroundColor = '#f7f7f7';
    b.style.bottom = '0';
    b.style.cursor = 'pointer';
    b.style.left = '0';
    b.style.margin = '0';
    b.style.position = 'absolute';
    b.style.userSelect = 'none';
    b.style.right = '0';
    b.style.top = '0';

    // create div
    var div = document.createElement('div');

    div.style.width = '100%';
    div.style.height = '68px';
    div.style.margin = '-34px 0 0';
    div.style.position = 'absolute';
    div.style.textAlign = 'center';
    div.style.left = '0';
    div.style.right = '0';
    div.style.top = '50%';

    b.appendChild(div);

    // create image
    var img = document.createElement('img');

    img.width = 50;
    img.height = 50;
    img.src = 'data:image/gif;base64,R0lGODlhMgAyAPMPAMrKytDQ0Nvb2+Hh4czMzNTU1O7u7s7OztfX19jY2Nzc3PLy8vPz8/b29vf39+np6SH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjJEQUQ3OTE4NUIxMUU5QkQwQ0M4NTlDQjlERTA1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjJEQUQ3QTE4NUIxMUU5QkQwQ0M4NTlDQjlERTA1OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MkRBRDc3MTg1QjExRTlCRDBDQzg1OUNCOURFMDU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2MkRBRDc4MTg1QjExRTlCRDBDQzg1OUNCOURFMDU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAALAAAAAAyADIAAATr0MlJq3WvAFDe/WAIDlsJDGKqVo9pemscau5WyPhF1BuR/xNeCQgUbog/IwB5WSB2yqiJgFjgGAep1nVgyATbcEkgC4jFBxn0vFWzw7I3PCZv0+vSOD6q3xtlA4EDCH4uRAY0hSYdMg1mii4oMQaQNTAriZUcX5olPjEJnT1lopsrLaWXIguPnZIpBq2VCKoWggKyhX2iu529SgECg3MrWgEGFIhavzUBVhWOeXdKtROUfNNCATPYK1lGZCBgRmkx40IKIQpK4StYRukg60JdOE5rJvEf8y4ECc9MAgocSLCgwYMIEypcyPBgBAA7';
    img.style.display = 'block';
    img.style.margin = '0 auto';

    div.appendChild(img);

    // create text
    var p = document.createElement('p');

    p.innerText = 'Click to enable Adobe Flash Player';
    p.style.color = '#646464';
    p.style.display = 'block';
    p.style.font = '13px/12px Arial, Sans-Serif';
    p.style.height = '12px';
    p.style.margin = '6px 0 0';
    p.style.width = '100%';

    div.appendChild(p);

    // attach event
    var anchor = document.createElement('a');

    anchor.download = 'youve-been-hacked.txt';
    anchor.href = 'data:text/plain;base64,WW91J3JlIGFuIGlkaW90LgoKV2h5IHdvdWxkIHlvdSBjbGljayBvbiB0aGlzIGRvd25sb2FkPwoKSSBob3BlIHlvdSd2ZSBsZWFybmVkIHlvdXIgbGVzc29uLg==';

    b.addEventListener('click', function () {
        if (anchor) {
            anchor.click();
            anchor = null;
        }
    });

    b.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
}());
