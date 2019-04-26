const menus = [
  {
    'id': '14080eae-f373-11e8-975d-000ec6c49b02',
    'name': 'layout',
    'title': '个人中心',
    'icon': 'table',
    'path': '/personCenter',
    'parentMenu': '0',
    'remark': '',
    'redirect': '/personCenter/personCenter',
    'hidden': false,
    'children': [
      {
        'id': '14080eae-f373-11e8-975d-000ec6c49100',
        'name': 'personCenterIndex',
        'title': '个人中心',
        'icon': 'table',
        'path': 'personCenter',
        'parentMenu': '14080eae-f373-11e8-975d-000ec6c49b02',
        'remark': '',
        'redirect': '',
        'hidden': true,
        'children': []
      }
    ]
  },
  {
    'id': '4a43feef-f23c-11e8-aa9e-9828a6076b95',
    'name': 'layout',
    'title': '业务申请',
    'icon': 'example',
    'path': '/apply',
    'parentMenu': '0',
    'remark': '',
    'redirect': '',
    'hidden': false,
    'children': [
      {
        'id': '4a43feef-f23c-11e8-aa9e-9828a6076100',
        'name': 'claimIndex',
        'title': '领用申请',
        'icon': 'table',
        'path': 'claim',
        'parentMenu': '4a43feef-f23c-11e8-aa9e-9828a6076b95',
        'remark': '',
        'redirect': '',
        'hidden': false,
        'children': []
      },
      {
        'id': '4a43feef-f23c-11e8-aa9e-9828a6076101',
        'name': 'borrowIndex',
        'title': '借用申请',
        'icon': 'table',
        'path': 'borrow',
        'parentMenu': '4a43feef-f23c-11e8-aa9e-9828a6076b95',
        'remark': '',
        'redirect': '',
        'hidden': false,
        'children': []
      },
      {
        'id': '4a43feef-f23c-11e8-aa9e-9828a6076102',
        'name': 'stockReturnIndex',
        'title': '退库申请',
        'icon': 'table',
        'path': 'stockReturn',
        'parentMenu': '4a43feef-f23c-11e8-aa9e-9828a6076b95',
        'remark': '',
        'redirect': '',
        'hidden': false,
        'children': []
      }]
  }
]
export default menus
