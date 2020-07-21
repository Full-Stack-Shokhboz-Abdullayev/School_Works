from django.db import models

# Create your models here.


class GradeNum(models.Model):
    num = GRADES = (
        ('1', '1',), ('2', '2',),
        ('3', '3',), ('4', '4',),
        ('5', '5',), ('6', '6',),
        ('7', '7',), ('8', '8',),
        ('9', '9',), ('10', '10',),
        ('11', '11',),
    )

    num = models.CharField(choices=GRADES, max_length=2, null=True)

    def __str__(self):
        return self.num


class Grade(models.Model):
    
    grade_num = models.ForeignKey(GradeNum, on_delete=models.CASCADE)
    

    grade_letter = models.CharField(max_length=1, null=True)

    motto = models.TextField(max_length=200, null=True,
                             verbose_name='Shior', blank=True,
                             unique=True, error_messages={
                                 'unique': 'Bunday shior allaqachon mavjud!',
                             }, default=None)

    class Meta:
        unique_together = ['grade_num', 'grade_letter']
        # ordering = ['grade_num']
    # def clean_motto(self):
    #     if self.cleaned_data['motto'] == "":
    #         return None
    #     else:
    #         return self.cleaned_data['motto']
    def clean(self):
        data = self.motto
        if data == "":
            data = None # not actual cleaning code 
        else: pass

        self.motto = data

    
    def __str__(self):
        return f"{self.grade_num}-{self.grade_letter}"


class Pupil(models.Model):
    first_name = models.CharField(max_length=200, null=True)
    surname = models.CharField(max_length=200, null=True)
    date_of_birth = models.DateField(
        null=True, verbose_name="yy-mm-dd")
    nation = models.CharField(
        max_length=100, null=True, verbose_name="Millati")
    grade = models.ForeignKey(Grade, null=True,
                              on_delete=models.CASCADE)
    m_name = models.CharField(
        max_length=200, null=True, verbose_name="Mother's name")
    m_surname = models.CharField(
        max_length=200, null=True, verbose_name="Mother's surname")
    f_surname = models.CharField(
        max_length=200, null=True, verbose_name="Father's surname")
    date_added = models.DateTimeField(auto_now_add=True)
    f_name = models.CharField(
        max_length=200, null=True, verbose_name="Father's name")
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = [
            ['first_name', 'date_of_birth',
             'surname', 'nation', 'grade',
             'm_name', 'm_surname',
             'f_name', 'f_surname'],
        ]

    def __str__(self):
        return f"{self.first_name} {self.surname}."
