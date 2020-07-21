def all(model):
    return model.objects.all()

def getter(model, pk):
    return model.objects.get(id=pk)

def filter(model, specifier, pk):
    return model.objects.filter(grade_nums=pk)


